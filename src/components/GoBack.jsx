import React from "react";

import { Link } from "react-router-dom";

import goBack from "../assets/imgs/Back.png";

const GoBack = () => {
  return (
    <div className="goBack">
      <Link to="/">
        <img src={goBack} alt="" />
      </Link>
    </div>
  );
};

export default GoBack;
