import { NestFactory } from '@nestjs/core';
import { PostsServiceModule } from './posts-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsServiceModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
