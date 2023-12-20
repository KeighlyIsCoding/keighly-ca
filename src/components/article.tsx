import React from "react";

interface ArticleProps {
  title: string,
  className: string,
  content: React.ReactNode
}

export const Article = ({ title, className, content }: ArticleProps) => {
  return (
    <article className={className}>
      <h2>{title}</h2>
      <>{content}</>
    </article>
  );
}