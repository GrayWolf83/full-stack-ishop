const express = require('express')
const router = express.Router({ mergeParams: true })
const auth = require('../../middleware/auth.middleware')

router.get('/:userId', auth, async (req, res) => {
	const order = await Order.find({ userId: req.user._id })

	res.status(200).send(order)
})

router.post('/', auth, async (req, res) => {
	const userId = req.user._id

	if (userId) {
		const newOrder = await Order.create({
			userId,
			cart: req.body.cart,
		})

		return res.status(200).send(newOrder)
	}

	res.status(401).json({ message: 'Unautorized' })
})

module.exports = router
