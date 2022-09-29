import React from "react";

type AssetDetailsProps = {
  title?: string;
  paragraph?: string;
};

const AssetDetails = ({ title, paragraph }: AssetDetailsProps) => (
  <div>
    <h1>Asset Details Page</h1>

    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);

export default AssetDetails;
