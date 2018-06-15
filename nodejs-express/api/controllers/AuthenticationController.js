module.exports = class AuthenticationController {
	static async authenticate(req, res, next) {
        // This is just a dummy to show you how an authentication challenge
        // In a proper scenario, you would have to implement an adequate
        // authentication by passing username, password or even using an 
        // external service.
        let access_token = "Bearer 123456789"

        res.status(200).send(access_token)
        next()
    }
}