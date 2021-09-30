import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://db:27017/totalzero', {
    user: 'dotr',
    pass: '123mudar',
    dbname: 'totalzero',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
