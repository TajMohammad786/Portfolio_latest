import React from "react";
import Image from "next/image";
// import htmlLogo from "../../../public/images/logo/html-5.png";
// import cssLogo from "../../../public/images/logo/css-3.png";
import scssLogo from "../../../public/images/logo/sass.png";
import ReactJsLogo from "../../../public/images/logo/physics.png";
import JavaScriptLogo from "../../../public/images/logo/js.png";
import MongoDBLogo from "../../../public/images/logo/mongo.png";
import BootstrapLogo from "../../../public/images/logo/bootstrap.png";
import TailwindLogo from "../../../public/images/logo/tailwind.png";
import cppLogo from "../../../public/images/logo/c-.png";
import nodeLogo from "../../../public/images/logo/nodejs.png";
import expressLogo from "../../../public/images/logo/express.png";
import mysqlLogo from "../../../public/images/logo/mysql.png";
import githubLogo from "../../../public/images/logo/github.png";
import gitLogo from "../../../public/images/logo/git.png";
import TypeScriptLogo from "../../../public/images/logo/typescript.png";

const skillsList = [
  {
    name: "ReactJS",
    icon: ReactJsLogo,
  },
  {
    name: "JavaScript",
    icon: JavaScriptLogo,
  },
  {
    name: "TypeScript",
    icon: TypeScriptLogo,
  },
  {
    name: "NodeJS",
    icon: nodeLogo,
  },
  {
    name: "Express",
    icon: expressLogo,
  },
  {
    name: "MongoDB",
    icon: MongoDBLogo,
  },
  {
    name: "MySQL",
    icon: mysqlLogo,
  },
  {
    name: "SCSS",
    icon: scssLogo,
  },
  {
    name: "Bootstrap",
    icon: BootstrapLogo,
  },
  {
    name: "Tailwind",
    icon: TailwindLogo,
  },
  {
    name: "C++",
    icon: cppLogo,
  },

  {
    name: "GitHub",
    icon: githubLogo,
  },
  {
    name: "Git",
    icon: gitLogo,
  },
];
const AchievementsSection = () => {
  return (
    <div className="bg-black-200 mb-16 py-12 border-2 border-gray-700">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-bold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Skills & Abilities
          </span>
        </h2>
        <div className="flex flex-wrap justify-center">
          {skillsList.map((skill, index) => (
            <div key={index} className="m-6 flex flex-col items-center ">
              <div className="bg-gray-800 p-6 rounded-full mb-4 hover:scale-110  transition-transform">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={80} // Adjust the width to your preferred size
                  height={80} // Adjust the height to your preferred size
                  objectFit="contain"
                />
              </div>
              <p className="text-white text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
