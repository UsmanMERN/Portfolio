import React, { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import { TfiBag, TfiBook } from "react-icons/tfi";

function Index() {
  const [accordionState, setAccordionState] = useState("education");

  const toggleAccordion = (section) => {
    if (accordionState === section) {
      return;
    }
    setAccordionState(section);
  };

  return (
    <>
      <div className="container mb-5 pb-5">
        <h2 className="text-center mb-4 my-3">My Qualification 🏅</h2>
        <p className="pb-3 text-center font-size-lg">Unveiling My Journey 🌟</p>
        <div className="row">
          <div className="col-6 col-md-3 offset-md-3">
            <h3
              className={`text-center mb-4 hover-effect--qualification ${
                accordionState === "education" ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => toggleAccordion("education")}
            >
              Education <TfiBook className="fs-md-3" />
            </h3>
          </div>
          <div className="col-6 col-md-3">
            <h3
              className={`text-center mb-4 hover-effect--qualification ${
                accordionState === "experiences" ? "active" : ""
              }`}
              onClick={() => toggleAccordion("experiences")}
              style={{ cursor: "pointer" }}
            >
              Experience <TfiBag className="fs-md-3" />
            </h3>
          </div>
        </div>

        {accordionState === "education" && <Education />}
        {accordionState === "experiences" && <Experience />}
      </div>
    </>
  );
}

export default Index;
