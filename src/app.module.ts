import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { RootDoc, RootDocSchema } from './rootdoc.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RootDoc.name, schema: RootDocSchema },
    ]),
    MongooseModule.forRoot('mongodb://localhost:27017/test'),

  ],
  providers: [AppService],
})
export class AppModule {}
