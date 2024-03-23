import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Comments } from '@prisma/client';
import { PhoneCommentsService } from './phone-comments.service';
import { Comments as CommentsModel } from '@prisma/client';

@Controller('phone-comments')
export class PhoneCommentsController {
  constructor(private readonly phoneCommentsService: PhoneCommentsService) {}

  @Get('/:id')
  async getPhoneComments(
    @Param('id') id: string,
  ): Promise<Partial<Comments>[]> {
    return this.phoneCommentsService.phoneComments(Number(id));
  }

  @Post('/createComment')
  async createDraft(
    @Body()
    body: {
      commentData: {
        phoneNumberId: number;
        text: string;
      };
    },
  ): Promise<CommentsModel> {
    const { commentData } = body;

    return this.phoneCommentsService.createComment(commentData);
  }
}
