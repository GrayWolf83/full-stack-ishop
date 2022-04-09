const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		cost: { type: Number, required: true },
		isVisible: { type: Boolean, required: true },
		category: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		manageId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{
		timestamps: true,
	},
)

module.exports = model('Product', schema)
