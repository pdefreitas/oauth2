module.exports = function() {
	let express = require("express")
	let router = express.Router()

	const AuthorizationController = require("../controllers/AuthorizationController.js")

	router.post("/authorize",  AuthorizationController.authorize)

	return router
}