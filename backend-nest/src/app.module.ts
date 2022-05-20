import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ContactModule,
    MongooseModule.forRoot(
      'mongodb+srv://adoPg:3vJUWn4ntcW6N8fz@main.ir5pn.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'agenda',
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
