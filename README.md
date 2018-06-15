# HypeLabs Authorization Documentation

## Introduction
We do provide a mechanism to allow our developers to specify which devices are permitted to use their app identifiers. The flexibility of this system enables the implementation of authentication & authorization system that interact with the HypeLabs SDK without too much effort and at the same time securely. Apps in production mode need to have this mechanism implemented.

## Sequence Diagram
The step that this document detail is the interaction between **HypeLabs Certification Service** and **Your A&A Service**, more precisely the **"Prompts authorization"** step.

![Sequence Diagram Picture](https://hypelabs.io/media/images/OAuth2.png)

## Requirements
To have authorization you need to set up a web service that will receive the authorization requests. Our authorization feature should work with already existing authorization mechanisms that follow OAuth 2.0 specifications [1]. The interaction between our certification service (resource server) and your authorization & authentication service (A&A service) is beyond the scope of the OAuth 2.0 specification. However, we make sure it is very similar to the interaction between the device and your authentication service regarding exchanged information (api_user, api_password, access_token and token_type).

### Authorization Token
Your authorization token equals to the **access_token** and **token_type** specified in the OAuth 2.0 specification, provided in the SDK during the request access token callback. It should be provided with "token_type access_token" format. Example of valid authorization token:
```
Bearer 123456789
```

### HTTP Request
HypeLabs provides authorization via an HTTP POST call. You need to setup your authorization settings, and such feature is available in the app identifier settings at HypeLabs website. It is only possible when the application is in production mode. Otherwise, the application will use the randomly generated token for authorization purposes. Such application mode is not safe and not recommended for production, as it is only available for development/testing purposes.

#### HTTP Method
The HTTP method in use is POST.
#### HTTP URL
It will use the URL you set in your application settings.
#### HTTP Content-Type
appliation/json
#### HTTP Body
The body contents that your service will receive are like the following. The contents are sent in :
```
{
    api_user: "...",
    api_secret: "...",
    access_token: "...",
    token_type: "...",
    user_identifier: "..."
}
```
The fields **api_user** and **api_password** are set in your application settings. The **access_token** and the **token_type** are the very same that your authorization server provides to clients, as per OAuth 2.0 Authorization Framework conventions. The **user_identifier** field is only present if the client application provides a valid value that must respect the SDK requirements.

#### HTTP Code/Response
Our service expects an HTTP Code 200 (Valid) for a valid authorization. The response body is not used at this moment, but it could be used in the feature.

## References

[1] [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
