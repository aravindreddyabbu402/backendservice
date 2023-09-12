import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Sample API')
    .setDescription('Sample API description')
    .setVersion('1.0')
    .addTag('sample')
    .addBearerAuth(
      { 
        description: `Please generate a token using the authenticateUser endpoint and pass it here.`,
        name: 'Authorization',
        bearerFormat: 'Bearer', 
        scheme: 'Bearer',
        type: 'http', 
        in: 'Header'
      },
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.enableCors();
  await app.listen(8045);
}
bootstrap();