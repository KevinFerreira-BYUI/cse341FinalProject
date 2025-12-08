require("dotenv").config();
const swaggerAutogen = require("swagger-autogen");
const env = process.env.DEV_FIELD || "development";


const doc = {
    info: {
        title: "Football Scouts Api",
        description: "A Api to help scouts to the football players"
    },

    host: env === "production" ? "cse341finalproject-sfnr.onrender.com" : "localhost:8080",
    schemes: env === "production" ? ["https"] : ["http"],
    basepath: "/",
    
    // components: {
    //     securitySchemes: {
    //         githubOAuth: {
    //             type: "oauth2",
    //             description: "Autenticação via GitHub OAuth",
    //             flows: {
    //                 authorizationCode: {
    //                     authorizationUrl: "https://github.com/login/oauth/authorize",
    //                     tokenUrl: "https://github.com/login/oauth/access_token",
    //                     scopes: {
    //                         "user:email": "Permite obter email do usuário"
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // },

    // security: [{ githubOAuth: [] }]
};

const outputFile = "./swagger.json";
const endpointFile = ["./app.js"];

swaggerAutogen(outputFile, endpointFile, doc);