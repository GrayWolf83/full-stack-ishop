const Category = require('../models/Category')

const categoriesMock = require('../mock/categories.json')

module.exports = async () => {
	const categories = await Category.find()

	if (categories.length !== categoriesMock.length) {
		await createInitialEntity(Category, categoriesMock)
	}
}

async function createInitialEntity(Model, data) {
	await Model.collection.drop()

	return Promise.all(
		data.map(async (item) => {
			try {
				const newItem = new Model(item)

				await newItem.save()
				return newItem
			} catch (e) {
				return e
			}
		}),
	)
}
