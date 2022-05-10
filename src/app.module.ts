import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/todo-db', {
      useNewUrlParser: true,
      lookup: undefined,
      family: undefined,
      hints: undefined,
      localAddress: undefined,
      localPort: undefined
    }),
    CategoryModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
