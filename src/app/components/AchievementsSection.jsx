import React from "react";
import Image from "next/image";

const skillsList = [
  {
    name: "ReactJS",
    icon: "/images/logo/physics.png",
  },
  {
    name: "JavaScript",
    icon: "/images/logo/js.png",
  },
  {
    name: "TypeScript",
    icon: "/images/logo/typescript.png",
  },
  {
    name: "NodeJS",
    icon: "/images/logo/nodejs.png",
  },
  {
    name: "Express",
    icon: "/images/logo/express.png",
  },
  {
    name: "MongoDB",
    icon: "/images/logo/mongo.png",
  },
  {
    name: "MySQL",
    icon: "/images/logo/mysql.png",
  },
  {
    name: "Kotlin",
    icon: "/images/logo/kotlin.png",
  },
  {
    name: "ExtJs",
    icon: "/images/logo/extjs.png",
  },
  {
    name: "SpringBoot",
    icon: "/images/logo/spring.png",
  },
  {
    name: "Oracle SQL",
    icon: "/images/logo/oracle.png",
  },
  {
    name: "SCSS",
    icon: "/images/logo/sass.png",
  },
  {
    name: "Bootstrap",
    icon: "/images/logo/bootstrap.png",
  },
  {
    name: "Tailwind",
    icon: "/images/logo/tailwind.png",
  },
  {
    name: "C++",
    icon: "/images/logo/c-.png",
  },
  {
    name: "GitHub",
    icon: "/images/logo/github.png",
  },
  {
    name: "BitBucket",
    icon: "/images/logo/bitbucket.png",
  },
  {
    name: "Git",
    icon: "/images/logo/git.png",
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
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
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
