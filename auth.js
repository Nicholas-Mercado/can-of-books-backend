// 'use strict';

// // these are packages that I installed in terminal
// //jwt - json web token
// const jwt = require('jsonwebtoken');

// //jwks - json web key set
// const jwksClient = require('jwks-rsa');

// // the jwks uri come Auth0 account page -> advanced setting -> Endpoints -> 0auth -> JSON Web Key Set
// const client = jwksClient({
//   jwksUri: process.env.JWKS_URI
// });

// // I need a getKey function from jsonwebtoken to make things work
// function getKey(header, callback){
//   client.getSigningKey(header.kid, function(err, key) {
//     var signingKey =key.publicKey || key.rsaPublicKey;
//     callback(null, signingKey);
//   });
// }

// // we are writing this function to verify the user on our route
// // this is how we do it!
// function verifyUser (req, errorFirstOrUserCallbackFunction){
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     console.log(token);
//     // from the jsonwebtoken docs: 
//     jwt.verify(token, getKey, {}, errorFirstOrUserCallbackFunction);
//   } catch(error){
//     errorFirstOrUserCallbackFunction('Not Authorized');
//   }
// }

// module.exports = verifyUser;
