const express = require('express')
const router = express.Router({ mergeParams: true })
const nanoid = require('nanoid')
const auth = require('../../middleware/auth.middleware')
const manage = require('../../middleware/manage.middleware')
const Order = require('../../models/Order')

router.get('/user', auth, async (req, res) => {
	const userId = req?.user?._id

	if (!userId) {
		return res.status(401).json({ message: 'Unautorized' })
	}

	const userOrders = await Order.find({ userId })
	res.status(200).send(userOrders)
})

router.get('/manage', auth, manage, async (req, res) => {
	const userId = req?.user?._id

	if (!userId || !req?.user?.isManage) {
		return res.status(401).json({ message: 'Unautorized' })
	}

	const manageOrders = await Order.find(manageId === userId)

	res.status(200).send(manageOrders)
})

router.post('/', auth, async (req, res) => {
	const userId = req?.user?._id

	if (!userId) {
		return res.status(401).json({ message: 'Unautorized' })
	}

	const order = []
	const number = nanoid()

	req.body.forEach(async (item) => {
		const newOrder = await Order.create({
			productId: item._id,
			userId,
			manageId: item.manageId,
			count: item.count,
			number,
			status: 'pending',
		})
		order.push(newOrder)
	})

	res.status(201).send(order)
})

module.exports = router
