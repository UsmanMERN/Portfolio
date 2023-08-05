import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaGraduationCap, FaBook } from "react-icons/fa";

function Education() {
  return (
    <div className="experience-container">
      <VerticalTimeline lineColor="#8e9aaf">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#8e9aaf", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid #8e9aaf",
          }}
          date="2019 - Present"
          iconStyle={{ background: "#8e9aaf", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor in Software Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Government College University
          </h4>
          <p>
            Pursuing a Bachelor's degree in Software Engineering. Completed 4th
            semester with proficiency in C++ and Data Structures and Algorithms
            (DSA).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#8e9aaf", color: "#fff" }}
          icon={<FaBook />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Structures and Algorithms (DSA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Online Learning Platform
          </h4>
          <p>
            Studied and practiced Data Structures and Algorithms concepts for
            advanced problem-solving skills.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
