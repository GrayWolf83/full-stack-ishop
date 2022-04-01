const express = require('express')
const router = express.Router({ mergeParams: true })
const auth = require('../../middleware/auth.middleware')
const Product = require('../../models/Product')

router.get('/user', auth, async (req, res) => {
	if (req?.user?._id) {
		const userOrders = await Order.find({ userId: req.user._id })
		return res.status(200).send(userOrders)
	}

	res.status(401).json({ message: 'Unautorized' })
})

router.get('/manage', auth, async (req, res) => {
	if (req?.user?._id) {
		const products = await Product.find({ manageId: req.user._id })
		const orders = await Order.find()

		const manageOrders = orders.filter((order) => {
			return products.map((product) => {
				return order.cart.includes(product._id)
			})
		})

		return res.status(200).send(manageOrders)
	}

	res.status(401).json({ message: 'Unautorized' })
})

module.exports = router
