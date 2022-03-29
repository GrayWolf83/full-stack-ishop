module.exports = (user) => {
	return {
		_id: user._id,
		name: user.name,
		role: user.role,
		cart: user.cart,
	}
}
