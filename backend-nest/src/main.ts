import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: `http://localhost:${process.env.CLIENT_PORT}`,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
