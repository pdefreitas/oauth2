module.exports = class AuthorizationController {
	static async authorize(req, res, next) {
        let access_token = "Bearer 123456789"

        console.log("Authorization request from user identifier " + req.body.user_identifier)

        let access_token_to_check = req.body.token_type + " " + req.body.access_token

        console.log("Expected token \"" + access_token + "\" and received token is \"" + access_token_to_check + "\" ...")

        if((req.body.api_user === "test" && req.body.api_secret === "test") && (access_token_to_check === access_token)) {
            console.log("Authorized")
            res.status(200).json() // 200 OK
        } else {
            console.log("Unauthorized")
            res.status(401).json() // 401 Unauthorized
        }

        next()
    }
}