import React from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,

  SiVercel,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,

  SiHtml5,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

export const TechStack = () => {
  return (
    <div className="bg-gray-300 px-12 lg:px-12 py-24 md:py-32">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-8xl font-bold text-black tracking-tight">
          Teck Stack
        </h2>
        <p className="text-md sm:text-[25px] text-red max-w-2xl mx-auto mt-1">
          Working knowledge of  <span className="italic"> Node.js </span> &  <span className="italic">MongoDB</span>
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div id="techstack" className="divide-y divide-neutral-900 border border-neutral-900 scroll-mt-72">
      <div className="grid grid-cols-5 divide-x divide-neutral-900">
        <LinkBox Icon={SiVercel} href="#" />
        <LinkBox Icon={SiGithub} href="#" />
        <LinkBox Icon={SiGit} href="#" />
        <LinkBox Icon={SiPostman} href="#" />
        <LinkBox Icon={SiNpm} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiMongodb} href="#" />
        <LinkBox Icon={SiExpress} href="#" />
        <LinkBox Icon={SiReact} href="#" />
        <LinkBox Icon={SiNodedotjs} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiHtml5} href="#" />
        <LinkBox Icon={SiJavascript} href="#" />
        <LinkBox Icon={SiTailwindcss} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

export default TechStack