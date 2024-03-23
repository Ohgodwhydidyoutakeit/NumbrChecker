import { Injectable } from '@nestjs/common';
import { PhoneNumber, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhoneNumbersService {
  constructor(private prisma: PrismaService) {}

  async phoneNumber(
    phoneNumberUniqueId: Prisma.PhoneNumberWhereUniqueInput,
  ): Promise<PhoneNumber | null> {
    return this.prisma.phoneNumber.findUnique({
      where: phoneNumberUniqueId,
    });
  }

  async phoneNumbers(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PhoneNumberWhereUniqueInput;
    where?: Prisma.PhoneNumberWhereInput;
    orderBy?: Prisma.PhoneNumberOrderByWithRelationInput;
  }): Promise<PhoneNumber[]> {
    // const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.phoneNumber.findMany({
      orderBy: {
        numberOfSearches: 'desc',
      },
    });
  }

  async createPhoneNumber(
    data: Prisma.PhoneNumberCreateInput,
  ): Promise<PhoneNumber> {
    return this.prisma.phoneNumber.create({ data });
  }

  async increasePhoneNumberVisitCount(
    phoneNumber: PhoneNumber,
  ): Promise<PhoneNumber> {
    return this.prisma.phoneNumber.update({
      where: phoneNumber,
      data: {
        ...phoneNumber,
        numberOfSearches: { increment: 1 },
      },
    });
  }
}
