const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		name: { type: String, enum: ['user', 'manage'] },
	},
	{
		timestamps: true,
	},
)

module.exports = model('Role', schema)
