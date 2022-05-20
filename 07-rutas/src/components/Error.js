import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <strong>This page is not available</strong>
      <br />
      <Link to="/Home">Comeback Home</Link>
    </div>
  );
};
