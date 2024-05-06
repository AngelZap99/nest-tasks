import { join } from 'path';
// NEST imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
// TypeORM imports
// import { DataSource } from 'typeorm';
// Apollo imports
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

// MODULES
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

// CONFIGURATIONS
// import connectionOptions from './dbConfig';

@Module({
  imports: [
    // environment configuration
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),

    // third party imports
    // TypeOrmModule.forRoot(connectionOptions), // TypeORM
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }), // Apollo GraphQL

    // local imports
    AuthModule,
    UsersModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private readonly dataSource: DataSource) {
  //   console.log('Connection to database established');
  // }
}
