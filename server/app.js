const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')
const chalk = require('chalk')
const initDatabase = require('./startUp/initDatabase')
const routesV1 = require('./routes/v1')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1', routesV1)

const PORT = config.get('port') ?? 8080

// if (process.env.NODE_ENV === 'production') {
// 	console.log('production')
// } else {
// 	console.log('development')
// }

async function start() {
	try {
		mongoose.connection.once('open', () => {
			initDatabase()
		})
		await mongoose.connect(config.get('mongoUri'))
		app.listen(PORT, () =>
			console.log(
				chalk.green(`Server has been started on port ${PORT}...`),
			),
		)
	} catch (error) {
		console.log(chalk.red(error.message))
		process.exit(1)
	}
}

start()
