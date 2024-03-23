import Link from "next/link";

import "./CommentCard.scss";
import React from "react";

interface CommentCardProps {
  text: string;
}
export default function CommentCard({ text }: CommentCardProps) {
  return <div className="comment-card"> {text}</div>;
}
