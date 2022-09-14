import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, async () => {

    const appService = app.get(AppService)
    await appService.getDocsByFooId('fooId1')

  });
}
bootstrap();
