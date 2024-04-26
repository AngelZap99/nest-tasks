import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const connectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true,
  logging: true,
};

export default connectionOptions;
