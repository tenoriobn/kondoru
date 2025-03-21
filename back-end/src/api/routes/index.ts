import bodyParser from 'body-parser';
import role from './roleRoute';
import auth from './authRoute'
import user from './userRoute'
import permission from './permissionRoute'
import security from './securityRoute'

export default (app: any) => {
  app.use(
    bodyParser.json(),
    auth,
    user,
    role,
    permission,
    security
  )
}