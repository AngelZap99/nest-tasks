// NEST imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// TypeORM imports
import { DataSource } from 'typeorm';

// Modules
import { AuthModule } from 'src/auth/auth.module';

// Config
import connectionOptions from 'src/dbConfig';

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
  // Constructor to establish connection to the database
  constructor(private readonly dataSource: DataSource) {
    console.log('Connection to database established');
  }
}
