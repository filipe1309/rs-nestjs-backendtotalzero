import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_DSN, {
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASSWORD,
      dbname: process.env.DATABASE_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
