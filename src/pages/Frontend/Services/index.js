import React from "react";
import Services from "./Services";
import Qualification from "../Qualification";
function index() {
  return (
    <>
      <div id="services" className="my-5 py-5">
        <Services />
        <Qualification />
      </div>
    </>
  );
}

export default index;
