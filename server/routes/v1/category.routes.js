const express = require('express')
const Category = require('../../models/Category')
const User = require('../../models/User')
const router = express.Router({ mergeParams: true })
const auth = require('../../middleware/auth.middleware')

router.get('/', async (req, res) => {
	try {
		const list = await Category.find()
		res.status(200).send(list)
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

router.post('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req?.user?._id)

		if (user && user.role === 'manage' && req?.body?.name) {
			const newCategory = await Category.create({
				name: req.body.name,
			})

			return res.status(201).send(newCategory)
		}

		res.status(401).json({ message: 'Unautorized' })
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

module.exports = router
