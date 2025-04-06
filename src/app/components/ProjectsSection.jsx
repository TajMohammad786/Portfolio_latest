"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "You are looking at it right now!. Built with Next.js and TailwindCSS. With responsive design for mobile devices. Integrated with Framer Motion for animations.  ",
    image: "/images/projects/11.png",
    tag: ["All", "UI", "Full Stack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "QuickChat - Realtime Chat App",
    description:
      "A real-time messaging app with user authentication, online status tracking, and image sharing. Built with React, Socket.IO, Express, MongoDB, JWT, and TailwindCSS for scalable, responsive, and secure communication.",
    image: "/images/projects/110.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/TajMohammad786/fullstack-chat-app",
    previewUrl: "https://fullstack-chat-app-8hf7.onrender.com/",
  },
  {
    id: 3,
    title: "Full-Stack E-commerce Application",
    description:
      "E-commerce application with React and Strapi. Buy and sell electronic gadgets!. Integrated with Stripe for payment processing.",
    image: "/images/projects/88.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/TajMohammad786/MyShoppers",
    previewUrl: "https://youtu.be/M34ephJC9Is?si=qye_bhgcuf34paII",
  },
  {
    id: 4,
    title: "PharmaChain : Pharma Supply Chain",
    description:
      "Built with React, Solidity, and Truffle. Integrated with Ganache and MetaMask. With React-Native mobile app for tracking shipments.",
    image: "/images/projects/99.png",
    tag: ["All", "BlockChain"],
    gitUrl: "https://github.com/TajMohammad786/MediChain-Pharma_Supply_Chain",
    previewUrl:
      "https://github.com/TajMohammad786/MediChain-Pharma_Supply_Chain",
  },
  {
    id: 5,
    title: "CodeCollab : Code Collaboration Platform",
    description:
      "Built as a college project with my to fellow classmate. React, Node.js, and Socket.io. Users can create rooms and share code in real-time. Users can chat with peer members for better productivity",
    image: "/images/projects/33.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/ChaitanyGhadigaonkar/Collaborative-Code-Editor",
    previewUrl: "https://collborativecodeeditor.netlify.app/",
  },
  {
    id: 6,
    title: "Crypto-Hunter",
    description:
      "Crypto-Hunter is a web app that can be used to track real-time Crypto-Currency prices. Built with React and Bootstrap. Integrated with CoinGecko API.",
    image: "/images/projects/22.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/TajMohammad786/crypto-Hunter",
    previewUrl: "https://crypto-hunter007.netlify.app/",
  },
  {
    id: 7,
    title: "Bill Generator",
    description:
      "Built with React and Bootstrap. Users can generate bills for their customers. Integrated with context API  for state management.",
    image: "/images/projects/44.png",
    tag: ["All", "UI"],
    gitUrl: "https://github.com/TajMohammad786/Bill-Generator-using-React",
    previewUrl: "https://bill-generator-app.netlify.app/",
  },
  {
    id: 8,
    title: "Sticky Notes web App",
    description:
      "Built with React and SCSS. Users can create sticky notes and save them. Integrated with Redux for state management.",
    image: "/images/projects/55.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TajMohammad786/Stickynotes-app",
    previewUrl: "https://tajmohammad786.github.io/Stickynotes-app/",
  },
  {
    id: 9,
    title: "Food Ordering App",
    description:
      "Built using HTML , Vanilla CSS and JavaScript. Users can order food from the menu. Responsive design for mobile devices. ",
    image: "/images/projects/66.png",
    tag: ["All", "UI"],
    gitUrl: "https://github.com/TajMohammad786/Food_Delivery_website",
    previewUrl: "https://tajmohammad786.github.io/Food_Delivery_website/",
  },
  {
    id: 10,
    title: "Spotify Clone",
    description:
      "Music streaming app built with React and Vanilla CSS. Users can play music added just only few music for demo purpose. Responsive design for mobile devices.",
    image: "/images/projects/77.png",
    tag: ["All", "UI"],
    gitUrl:
      "https://github.com/TajMohammad786/Spotify-Clone-A_Simple_Music_Player.github.io",
    previewUrl:
      "https://tajmohammad786.github.io/Spotify-Clone-A_Simple_Music_Player.github.io/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI"
          isSelected={tag === "UI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BlockChain"
          isSelected={tag === "BlockChain"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 hover:shadow-pink-500/30">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
