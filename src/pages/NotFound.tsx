import React from "react";

type NotFoundProps = {
  title?: string;
  paragraph?: string;
};

const NotFound = ({ title, paragraph }: NotFoundProps) => (
  <div>
    <h1>Not Found Page</h1>

    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);

export default NotFound;
