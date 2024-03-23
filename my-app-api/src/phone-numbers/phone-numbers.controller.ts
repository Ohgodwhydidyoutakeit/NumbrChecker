import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PhoneNumbersService } from './phone-numbers.service';

import { PhoneNumber as PhoneNumberModel } from '@prisma/client';
import { PolishPhoneNumberUtil } from 'src/utils/phone-number.util';

@Controller('phone-numbers')
export class PhoneNumbersController {
  constructor(private readonly phoneNumberService: PhoneNumbersService) {}

  @Get('/findOne/:id')
  async getPhoneNumbersById(
    @Param('id') id: string,
  ): Promise<PhoneNumberModel> {
    return this.phoneNumberService.phoneNumber({ id: Number(id) });
  }

  @Get('/all')
  async getPhoneNumbers(): Promise<PhoneNumberModel[]> {
    return this.phoneNumberService.phoneNumbers({});
  }

  @Post('/createPhoneNumber')
  async createPhoneNumber(
    @Body() body: { phoneNumberData: { number: string } },
  ): Promise<PhoneNumberModel> {
    const { number } = body.phoneNumberData;
    // validation
    if (!PolishPhoneNumberUtil.isValidPhoneNumber(number)) {
      throw new HttpException('Invalid phone number', HttpStatus.BAD_REQUEST);
    }

    // check if number already exists - if not create - if yes update it
    const phoneNumber = await this.phoneNumberService.phoneNumber({
      number: number,
    });

    if (phoneNumber) {
      return this.phoneNumberService.increasePhoneNumberVisitCount(phoneNumber);
    }

    return this.phoneNumberService.createPhoneNumber({
      number: number,
      numberOfSearches: 0,
    });
  }
}
