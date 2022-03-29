const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
		cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
	},
	{
		timestamps: true,
	},
)

module.exports = model('Order', schema)
