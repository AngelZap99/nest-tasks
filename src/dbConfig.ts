import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const connectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  entities: [],
};

export default connectionOptions;
