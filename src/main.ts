import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set the global prefix to 'api' -> {host}:{port}/api/{route}
  app.setGlobalPrefix('api');

  // Start the application on port 3000 by default or the port specified in the .env file
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
