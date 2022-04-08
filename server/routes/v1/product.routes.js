const express = require('express')
const Product = require('../../models/Product')
const router = express.Router({ mergeParams: true })
const auth = require('../../middleware/auth.middleware')
const manage = require('../../middleware/manage.middleware')
const User = require('../../models/User')

router.get('/', async (req, res) => {
	try {
		const list = await Product.find()
		res.status(200).send(list)
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

router.post('/', auth, manage, async (req, res) => {
	try {
		const userId = req.user._id

		const newProduct = await Product.create({
			...req.body,
			isVisible: true,
			manageId: userId,
		})

		res.status(200).send(newProduct)
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

router.patch('/', auth, manage, async (req, res) => {
	try {
		const userId = req.user._id
		const productId = req.body._id

		const product = await Product.findById(productId)

		if (!product || !product.manageId === userId) {
			return res.status(401).json({ message: 'Unautorized' })
		}

		await Product.findByIdAndUpdate(productId, { ...req.body })

		const changedProduct = await Product.findById(productId)

		res.status(200).send(changedProduct)
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

router.delete('/:productId', auth, manage, async (req, res) => {
	try {
		const userId = req.user._id
		const { productId } = req.params

		const product = await Product.findById(productId)

		if (!product || !product.manageId === userId) {
			return res.status(401).json({ message: 'Unautorized' })
		}

		await Product.findByIdAndDelete(productId)

		res.status(200).send(productId)
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

module.exports = router
