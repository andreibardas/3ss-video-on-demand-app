import React from "react";

type PopularProps = {
  title?: string;
  paragraph?: string;
};

const Popular = ({ title, paragraph }: PopularProps) => (
  <div>
    <h1>Popular Page</h1>

    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);

export default Popular;
