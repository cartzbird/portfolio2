import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}.</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-full text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="tablet:flex">
              <div className="mt-5 w-full">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 font-bold">
                    {resume.education.universityPara}
                  </p>
                  <p className="text-sm mt-2 font-bold opacity-80">
                    GPA 94/100
                  </p>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg">{"Harbin Engineering University"}</h2>
                  <h3 className="text-sm opacity-75">
                    {"Sept. 2016 - July 2020"}
                  </h3>
                  <p className="text-sm mt-2 font-bold">
                    {"Bachelor of Engineering in Automation"}
                  </p>
                  <p className="text-sm mt-2 font-bold opacity-80">
                    GPA 85/100
                  </p>
                </div>
                
              </div>
              <div className="mt-5 w-full">
                  <h1 className="text-2xl font-bold">Publication</h1>
                  <div className="mt-2">
                    <span className="text-sm mt-2 font-bold">
                      {"Research on Dynamic Planning Method of Collision Avoidance Route Based on Ship Kinematics,"}
                    </span>
                    <span className="text-sm mt-2">
                      {"Lipeng Wang, Chenkun Zhou (Primary author,presented the paper at Conf.), Zhi Zhang, Shan Ma, Wenlong Ma, 2021 40th Chinese Control Conference (CCC), 2021, pp. 6178-6183,"}
                    </span>
                    <p className="text-sm mt-2 font-bold opacity-80">
                      <a href="https://doi.org/10.23919/CCC52363.2021.9550425" target="_blank" rel="noopener noreferrer" className="underline">
                        {"DOI: 10.23919/CCC52363.2021.9550425"}
                      </a>
                    </p>
                  </div>
              </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg font-bold">Programming Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg font-bold">Professional Skills</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg font-bold">Speaking Languages</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
