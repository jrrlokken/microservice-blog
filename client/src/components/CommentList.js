import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "Comment awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "Comment removed by moderator";
    }

    return <li key={comment.id}>{content}</li>;
  });

  // console.log(comments);
  return <ul>{renderedComments}</ul>;
};

export default CommentList;
