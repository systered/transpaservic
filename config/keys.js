const dotenv = require("dotenv")
dotenv.config()

const SECRETORKEY = process.env.SECRETORKEY
module.exports = {
    secretOrKey: SECRETORKEY
}