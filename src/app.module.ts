import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './todo/schemas/todo.shema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:KTMdcLtWwtAJ9hJA@ciri-cluster0.beufu.mongodb.net/todo-test?retryWrites=true&w=majority', {
      useNewUrlParser: true
    }),
    MongooseModule.forFeature([{ name: 'Todo', schema: CategorySchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
