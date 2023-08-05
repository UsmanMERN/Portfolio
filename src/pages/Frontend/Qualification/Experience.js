import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { BiLogoReact } from "react-icons/b";
import { BiMobileAlt, BiLogoReact } from "react-icons/bi";

function Experience() {
  return (
    <div className="experience-container">
      <VerticalTimeline lineColor="#8e9aaf">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#8e9aaf", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid #8e9aaf",
          }}
          date="2022 - 2023"
          iconStyle={{ background: "#8e9aaf", color: "#fff" }}
          icon={<BiLogoReact />}
        >
          <h3 className="vertical-timeline-element-title">
            MERN Stack Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sylani Mass IT Training Programming
          </h4>
          <p>
            I have completed an intensive training program on MERN (MongoDB,
            Express.js, React.js, Node.js) stack development and mobile app
            development.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#8e9aaf", color: "#fff" }}
          icon={<BiMobileAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            Mobile App Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sylani Mass IT Training Programming
          </h4>
          <p>
            Acquired expertise in Mobile App development during the training.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
