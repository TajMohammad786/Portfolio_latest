const experienceData = [
  {
    company: "Vermont Information Processing(VIP) India Pvt Ltd",
    role: "Full Stack Developer - Hybrid",
    duration: "June 2024 - Present",
    description:
      "Working on product based software used for beverage pricing systems.Working as a FullStack Developer mainly with Sencha Extjs and Kotlin SpringBoot.Working closely with the team to rewrite Application into a new tech stack from scratch, handling Backend as well as Frontend side logic and code. Building APIs with Kotlin SpringBoot for Beverage Pricing Systems, handling UI with Component based Extjs. Working closely with US-based team members on product development. Engaged in daily standups and development cycles with US-based teams"
  },
  {
    company: "CODECLAUSE",
    role: "Web Development Intern",
    duration: "Dec 2022 - Jan 2023",
    description:
      "Worked on building projects having basic functionality. Understood Web development while enhancing my proficiency in HTML, CSS and JavaScript.",
  }
];

const Experience = () => {
  return (
    <section
      className="text-white py-12 px-6 md:px-20 bg-[#0f0f0f]"
      id="experience"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        Experience
      </h2>

      <div className="relative">
        {/* Right-side vertical line */}
        <div className="absolute top-0 right-0 md:right-5 w-[3px] h-full bg-pink-500 z-0" />

        <div className="space-y-12 relative ">
          {experienceData.map((exp, index) => (
            <div key={index} className="flex relative">
              {/* Card aligned to the left */}
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-pink-500/30 transition w-full md:w-11/12">
                <h3 className="text-2xl font-semibold text-pink-400">
                  {exp.role}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mt-1">
                  {exp.company} • {exp.duration}
                </p>
                <p className="mt-3 text-lg text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Timeline Dot on the right */}
              <span className="absolute top-1/2 right-0 md:right-5 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full ring-4 ring-[#0f0f0f] shadow-lg shadow-pink-500/40 " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
