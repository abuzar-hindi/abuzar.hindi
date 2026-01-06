import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  return (
    <section className="bg-yellow-100 relative w-full px-12 lg:px-12 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Desktop, single-column: Mobile */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left: About Text */}
          <AboutText />

          {/* Right: Animated Motion Blocks (hidden on mobile) */}
          <div className="hidden lg:block">
            <MotionBlocks />
          </div>
        </div>

        {/* Mobile: Motion Blocks Below */}
        <div className="lg:hidden mt-12">
          <MotionBlocksMobile />
        </div>
      </div>
    </section>
  );
};

const AboutText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="space-y-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-red-500 tracking-tight">
        About
      </h2>
      <div className="space-y-4 text-lg leading-relaxed text-black">
        <p>
          I’m Abuzar Hindi, a <b className="text-blue-700">Full MERN Stack Stack Web Developer</b>. I work on building reliable, scalable web applications with a strong focus on both frontend experience and backend logic. On the frontend, I care deeply about structure, responsiveness, and usability, and on the backend, I focus on clean APIs, data flow, and maintainable logic.</p>
        <p className="text-gray-500">
          <li>I build reusable, scalable components on both frontend and backend</li>
          <li>I use animations only where they improve clarity or user experience</li>
          <li>I focus on clean code, clear structure, and long-term maintainability</li>


        </p>
      </div>
    </motion.div>
  );
};

const blockData = [
  {
    title: "Education",
    description: "Bachelors in Computer Application | Preparing for Masters",
    details: "Hands-on project experience",
  },
  {
    title: "Experience",
    description: `Freelance & Personal projects | Real client work`,
    details: "2+ years of development",
  },
  {
    title: "Focus Areas",
    description: "Responsive UI, Performance, UX clarity",
    details: "Modern web designs",
  },
  {
    title: "I Work On",
    description: "Responsive web designs, Backend APIs & logic, Authentication",
    details: "& Continuing.....",
  },
];

const MotionBlocks = () => {
  return (
    <div className="grid grid-cols-2 gap-6 h-96">
      {blockData.map((block, index) => (
        <AnimatedBlock
          key={index}
          delay={index * 0.5}
          duration={0.6 + index * 0.05}
          title={block.title}
          description={block.description}
          details={block.details}
        />
      ))}
    </div>
  );
};

const MotionBlocksMobile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[650px] sm:h-96">
      {blockData.map((block, index) => (
        <AnimatedBlock
          key={index}
          delay={index * 0.05}
          duration={0.6 + index * 0.05}
          title={block.title}
          description={block.description}
          details={block.details}
        />
      ))}
    </div>
  );
};

const AnimatedBlock = ({ delay, duration, title, description, details }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      style={{ opacity, scale, y }}
      transition={{ delay, duration }}
      className="relative rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0 p-4 bg-gray-700 text-white flex flex-col justify-between">
        <div>
          <h3 className="text-yellow-300 text-xl md:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white text-sm md:text-base font-semibold mb-1">{description}</p>
        </div>
        <p className="text-yellow-500 text-xs md:text-sm">{details}</p>
      </div>
    </motion.div>
  );
};

export default About;