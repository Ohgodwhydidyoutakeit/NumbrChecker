import { Module } from '@nestjs/common';
import { PhoneNumbersService } from './phone-numbers.service';
import { PhoneNumbersController } from './phone-numbers.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PhoneNumbersService, PrismaService],
  controllers: [PhoneNumbersController],
  
})
export class PhoneNumbersModule {}
