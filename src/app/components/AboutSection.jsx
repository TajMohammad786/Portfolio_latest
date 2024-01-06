"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaExternalLinkAlt } from "react-icons/fa";


const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
      <li>
        Viva Institute of Technology, Virar
        <ul className="list-none pl-1">
          <li>CGPA: 9.13</li>
        </ul>
      </li>
      <li>
        Don Bosco Jr College, Naigaon
        <ul className="list-none pl-1">
          <li>Marks: 79.23&#37;</li>
        </ul>
      </li>
    </ul>

    ),
  },
  
  
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
      <li className="flex items-center">
      • FrontEnd Development Course | Coursera by Meta 
      <a href="https://drive.google.com/file/d/1D-ZW9yp5X6Ipm7WIT4EQS0TGC2lTvgaO/view?usp=drive_link" target="_blank" className="text-pink-500">
          <FaExternalLinkAlt className="ml-3" /></a>
      </li>
      <li className="flex items-center">
      • Complete ReactJS Course | Udemy
      <a href="https://drive.google.com/file/d/1-Jg7H3YPAfKg-RW7kCKgS9Tbcmh8pA0O/view?usp=drive_link" target="_blank" className="text-pink-500">
          <FaExternalLinkAlt className="ml-3" /></a>
      </li>
      <li className="flex items-center">
      • CSS and JavaScript Course | Udemy
      <a href="https://drive.google.com/file/d/1-JhTto2X8RF2gcweOtthFZ52G02D7Z6I/view?usp=drive_link" target="_blank" className="text-pink-500">
          <FaExternalLinkAlt className="ml-3" /></a>
      </li>
      <li className="flex items-center">
      • MySQL Crash Course | Udemy
        <a href="https://drive.google.com/file/d/1-dHeCrQYOmNp0txTHEcY-P9teDVgsnfS/view?usp=drive_link" target="_blank" className="text-pink-500">
          <FaExternalLinkAlt className="ml-3" /></a>
      </li>
    </ul>
    ),
  },
  {
    title: "Coding Profiles",
    id: "code",
    content: (
      <ul className="list-disc pl-2">
      <li className="flex items-center">
      
      • LeetCode
      <a href="https://leetcode.com/TajMohammad/" target="_blank" className="text-pink-500">
        <FaExternalLinkAlt className="ml-3" /></a>
      
        
      </li>
      <li className="flex items-center">
      
      • GFG Practice
        <a href="https://auth.geeksforgeeks.org/user/tajmohammadkhan679" target="_blank" className="text-pink-500">
          <FaExternalLinkAlt className="ml-3" /></a>
      
    
    </li>
    <li className="flex items-center">
      
    • CodeStudio 
    <a href="https://www.codingninjas.com/studio/profile/PseudoSolver" target="_blank" className="text-pink-500">
      <FaExternalLinkAlt className="ml-3" /></a>
      
    </li>
  </ul>

    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-6 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="hero image"
          width={500}
          height={500}
          style={{ borderRadius: "20px", marginBottom: "16px" }} // Adjust styles here
        />
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        About Me
            </span></h2>
            <h3 className="text-lg lg:text-xl font-bold">I&apos;m Taj Mohammad Khan</h3>
          <p className="font-medium">FullStack Developer</p>

          <p className="text-lg lg:text-xl mb-4 mt-3"> {/* Increase font size here */}
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MySQL,
            SQL, C++, HTML, CSS, Bootstrap and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. 
            {/* I am a team player and
            I am excited to work with others to create amazing applications. */}
          </p>
          <p className="text-lg lg:text-xl" > <span style={{ color: '#c084fc' }}>Email </span>: tajmohammadkhan679@gmail.com</p>
<p className="text-lg lg:text-xl"><span style={{ color: '#c084fc' }}>Place </span>: Mumbai, India</p>

          <div className="flex flex-row justify-start mt-4">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certification{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("code")}
              active={tab === "code"}
            >
              {" "}
              Coding Profiles{" "}
            </TabButton>
          </div>
          <div className="text-lg mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
