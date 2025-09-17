import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
        <Timeline events={[
            {
            date: "2023 - 2027",
            title: "B.S. in Computer Science",
            description: "West Visayas State University"
            },
            {
            date: "2021 - 2023",
            title: "Senior High School (STEM)",
            description: "Iloilo National High School"
            },
            {
            date: "2017 - 2021",
            title: "Junior High School",
            description: "Balasan National High School"
            }
        ]} />
    </div>
  )
}

export default Education
