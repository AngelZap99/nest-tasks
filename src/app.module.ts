// NEST imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// TypeORM imports
import { DataSource } from 'typeorm';

// Modules
import { AuthModule } from './auth/auth.module';

// Config
import connectionOptions from './dbConfig';

@Module({
  imports: [
    // environment configuration
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    // third party imports
    TypeOrmModule.forRoot(connectionOptions),
    // local imports
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly dataSource: DataSource) {
    console.log('Connection to database established');
  }
}
