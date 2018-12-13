// module.exports = {
//   mongoURI: "mongodb://admin:pass1234@ds127634.mlab.com:27634/sajtraversymern",
//   secretOrKey: "adfreteqr456456et"
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
