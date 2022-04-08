const User = require('../models/User')

module.exports = async (req, res, next) => {
	if (req.method === 'OPTIONS') {
		next()
	}

	try {
		const userId = req.user._id

		if (!userId) {
			return res.status(401).json({ message: 'Unautorized' })
		}

		const user = await User.findById(userId)

		if (user.role !== 'manage') {
			return res.status(401).json({ message: 'Unautorized' })
		}

		req.user.isManage = true
		next()
	} catch (e) {
		res.status(401).json({ message: 'Unautorized' })
	}
}
