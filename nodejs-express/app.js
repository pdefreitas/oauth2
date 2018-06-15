const express = require("express")
const app = express()

module.exports = async function() {

	app.use(express.json()) // to support JSON-encoded bodies
	app.use(express.urlencoded({extended: true})) // to support URL-encoded bodies

	// apply our middlewares for Authentication and Authorization purposes
	app.use("/", require("./api/routes/AuthenticationRouter")())
	app.use("/", require("./api/routes/AuthorizationRouter")())

	app.listen = await app.listen(5000)

	return app
}