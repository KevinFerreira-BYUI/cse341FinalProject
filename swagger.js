require("dotenv").config();
const swaggerAutogen = require("swagger-autogen");
const env = process.env.DEV_FIELD || "development";


const doc = {
    info: {
        title: "Football Scouts Api",
        description: "A Api to help scouts to the football players"
    },

    host: env === "production" ? "localhost:8080" : "localhost:8080",
    schemes: env === "production" ? ["https"] : ["http"],
    basepath: "/"  
};

const outputFile = "./swagger.json";
const endpointFile = ["./app.js"];

swaggerAutogen(outputFile, endpointFile, doc);