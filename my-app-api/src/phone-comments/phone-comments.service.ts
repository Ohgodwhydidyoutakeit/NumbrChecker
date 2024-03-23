import { Injectable } from '@nestjs/common';
import { Comments, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhoneCommentsService {
  constructor(private prisma: PrismaService) {}

  async phoneComments(
    // dont know the exact prisma type for relational query
    commentNumberUniqueId: number,
  ): Promise<Partial<Comments>[] | null> {
    return this.prisma.comments.findMany({
      where: {
        phoneNumberId: commentNumberUniqueId,
      },
      select: {
        id: true,
        text: true,
      },
    });
  }

  async createComment(data: Prisma.CommentsCreateInput): Promise<Comments> {
    console.log(data);
    return this.prisma.comments.create({
      data,
    });
  }
}
