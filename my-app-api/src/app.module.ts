import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PhoneNumbersModule } from './phone-numbers/phone-numbers.module';
import { PhoneCommentsModule } from './phone-comments/phone-comments.module';

@Module({
  imports: [PhoneNumbersModule, PhoneCommentsModule,],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
