const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String },
		role: { type: String, enum: ['user', 'manage'] },
	},
	{
		timestamps: true,
	},
)

module.exports = model('User', schema)
