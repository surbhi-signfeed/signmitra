// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { join } from 'path';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://3.109.54.26',
      'https://signmitra.in',
    ],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  //  Stripe webhook needs raw body for signature verification
  // app.use(
  //   '/admin/verify-payment', // Adjust this to match your route
  //   bodyParser.raw({ type: 'application/json' }),
  // );

  // Static file serving
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  await app.listen(3000);
}
bootstrap();
