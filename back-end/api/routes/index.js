const bodyParser = require('body-parser');

const auth = require('./authRoute');
const user = require('./userRoute');

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    user
  )
}