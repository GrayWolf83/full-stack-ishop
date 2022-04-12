const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		number: String,
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
		manageId: { type: Schema.Types.ObjectId, ref: 'User' },
		productId: { type: Schema.Types.ObjectId, ref: 'Product' },
		count: Number,
		status: {
			type: String,
			enum: ['pending', 'delivery', 'executed'],
		},
	},
	{
		timestamps: true,
	},
)

module.exports = model('Order', schema)
