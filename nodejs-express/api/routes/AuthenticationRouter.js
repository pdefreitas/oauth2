module.exports = function() {
	let express = require("express")
	let router = express.Router()

	const AuthenticationController = require("../controllers/AuthenticationController.js")

	router.post("/authenticate",  AuthenticationController.authenticate)

	return router
}