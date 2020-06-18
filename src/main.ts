import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: RTCDtlsTransport,
    options: {
      package: 'school',
      protoPath: join(__dirname, 'school/school.proto'),
    },
  }

  )
}
bootstrap();