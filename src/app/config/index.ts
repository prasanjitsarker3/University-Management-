import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })
export default {
  port: process.env.PORT,
  dataBaseUrl: process.env.dataBase,
  bcryptSalt: process.env.bcryptSalt,
  defaultPass: process.env.defaultPass,
  projectProcess: process.env.Development,
  jwtAccessToken: process.env.jwtSecretToken,
  jwtRefreshToken: process.env.secretRefreshToken,
  accessTokenExpaierDate: process.env.accessTokenExpaierDate,
  refreshTokenExpaierDate: process.env.refreshTokenExpaierDate,
}
