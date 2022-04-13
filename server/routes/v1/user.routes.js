const express = require('express')
const User = require('../../models/User')
const router = express.Router({ mergeParams: true })
const auth = require('../../middleware/auth.middleware')
const normalizeUser = require('../../utils/normalizeUser')

router.get('/', auth, async (req, res) => {
	try {
		const currentUser = await User.findById(req.user._id)
		res.status(200).send(normalizeUser(currentUser))
	} catch (e) {
		res.status(500).json({ message: 'На сервере произошла ошибка!' })
	}
})

module.exports = router
