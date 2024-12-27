const bodyParser = require('body-parser');

const auth = require('./authRoute');
const user = require('./userRoute');
const role = require('./roleRoute');
const permission = require('./permissionRoute');
const security = require('./securityRoute');

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    user,
    role,
    permission,
    security
  )
}