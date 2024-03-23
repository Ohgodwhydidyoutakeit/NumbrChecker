import { Module } from '@nestjs/common';
import { PhoneCommentsService } from './phone-comments.service';
import { PhoneCommentsController } from './phone-comments.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PhoneCommentsService, PrismaService],
  controllers: [PhoneCommentsController]
})
export class PhoneCommentsModule {}
