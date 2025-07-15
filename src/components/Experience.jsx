import { useState } from "react";
import ExpTimeline from "./ExperienceTimeline";

const Experience = () => {
  const [workExperience, setWorkExperience] = useState([
    {
      name: "Extentia Information Technology",
      duration: "Jan 2024 - Jan 2025",
      role: "Software Professional",
      location: "Bengaluru, India",
    },
    {
      name: "Incture Technologies",
      duration: "July 2023 - Jan 2024",
      role: "Senior Software Engineer",
      location: "Bengaluru, India",
    },
    {
      name: "Incture Technologies",
      duration: "Nov 2020 - July 2023",
      role: "Associate Software Engineer",
      location: "Bengaluru, India",
    },
    {
      name: "Incture Technologies",
      duration: "Oct 2020 - Jan 2021",
      role: "Trainee",
      location: "Bengaluru, India",
    },
  ]);

  const education = {
    name: "JNTUH College of Engineering",
    duration: "June 2016 - May 2020",
    role: "Bachelor of Technology in Electronics and Communication",
    location: "Hyderabad, India",
  };

  return (
    <section id="experience" className="min-h-screen px-4 py-16 md:px-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        Experience & Education
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        {/* Work Experience */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-purple-700">Work Experience</h2>
          <div className="">
            {workExperience.map((each, index) => (
              <ExpTimeline key={index} experience={each} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-purple-700">Education</h2>
          <ExpTimeline experience={education} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
