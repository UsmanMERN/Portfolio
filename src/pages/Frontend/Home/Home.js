/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// library
import { Link as ScrollLink } from "react-scroll";
// components
import Social from "./Social";
import Data from "./Data";
import Image from "./Image";
import HomeScroll from "./HomeScroll";

export default function Home() {
  return (
    <>
      <section id="home" className="my-lg-5 py-lg-4 my-3">
        <div className="container home_section my-5 my-lg-0 ">
          <div className="row text-center">
            <div className="col-3 col-lg-2 order-1 d-flex justify-content-center align-items-center">
              <Social />
            </div>
            <div className="col-md-6 col-sm-8 order-lg-3 order-2 col-9 col-lg-4 d-flex justify-content-center align-items-center">
              <Image />
            </div>
            <div className="col-md-12 col-lg-6 order-lg-2 order-3 d-flex justify-content-center align-items-center">
              <Data />
            </div>
          </div>
          <ScrollLink to={"about"} style={{ cursor: "pointer" }}>
            <div className="col-lg-8 col-12 text-center text-lg-start  offset-lg-2">
              <HomeScroll />
            </div>
          </ScrollLink>
        </div>
      </section>
    </>
  );
}
