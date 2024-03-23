import React, { FormEvent, useState } from "react";
import "./CommentInput.scss";
import { useRouter } from "next/router";

interface CommentInputProps {
  onSubmit: (textValue: string) => void;
}
const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit(comment);
  };

  return (
    <div className="commentInput">
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" name="comment" onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentInput;
