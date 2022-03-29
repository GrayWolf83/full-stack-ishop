const express = require('express')
const User = require('../../models/User')
const router = express.Router({ mergeParams: true })
const auth = require('../../middleware/auth.middleware')
const normalizeUser = require('../../utils/normalizeUser')

router.patch('/:userId', auth, async (req, res) => {
	try {
		const { userId } = req.params

		if (userId === req.user._id) {
			const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
				new: true,
			})

			res.send(updatedUser)
		} else {
			res.status(401).json({ message: 'Unautorized' })
		}
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

router.get('/', auth, async (req, res) => {
	try {
		const currentUser = await User.findById(req.user._id)
		res.status(200).send(normalizeUser(currentUser))
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

module.exports = router
