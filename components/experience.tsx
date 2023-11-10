"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import TimelineElement from "./timeline-element";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 px-4"
    >
      <SectionHeading>Work experience</SectionHeading>
      <VerticalTimeline lineColor="transparent" animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <TimelineElement item={item} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
