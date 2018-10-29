import React from "react";
import UpdateItem from "../components/UpdateItem";
import _app from "./_app";

// the URL query argument get set to props in _app.js

const Update = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default Update;
