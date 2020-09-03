const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_CONNECTION: process.env.MONGO_CONNECTION
};