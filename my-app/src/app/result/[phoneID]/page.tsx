"use client";

import CommentCard from "@/app/components/CommentCard/CommentCard";
import CommentInput from "@/app/components/CommentInput/CommentInput";
import { API_URL } from "@/app/consts/apiURL";
import { CommentDto } from "@/app/models/comment/comment";
import { CreateCommentDTO } from "@/app/models/comment/create-comment.dto";
import axios from "axios";

export default async function Page({
  params: { phoneID },
}: {
  params: { phoneID: string };
}) {
  const handleCommentSubmit = async (textValue: string) => {
    const dto: CreateCommentDTO = {
      commentData: {
        phoneNumberId: Number(phoneID),
        text: textValue,
      },
    };
    await axios
      .post<CreateCommentDTO>(API_URL + "phone-comments/createComment", dto)
      .then((data) => console.log(data.data));
  };

  const { data } = await axios.get<CommentDto[]>(
    API_URL + `phone-comments/${phoneID}`
  );

  return (
    <div>
      <h1>Post ID: {}</h1>
      <h2>add comment</h2>
      <CommentInput onSubmit={handleCommentSubmit}></CommentInput>
      {data.map((element) => {
        return <CommentCard key={element.id} text={element.text}></CommentCard>;
      })}
    </div>
  );
}
