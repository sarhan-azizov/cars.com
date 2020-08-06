import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_LOGIN,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["../src/**/*.entity.ts"],
  options: {
    enableArithAbort: true,
    useUTC: true,
  },
  synchronize: true,
  autoLoadEntities: true,
}));