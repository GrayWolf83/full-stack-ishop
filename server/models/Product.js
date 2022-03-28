const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		cost: { type: Number, required: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		manage: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{
		timestamps: true,
	},
)

module.exports = model('Product', schema)
