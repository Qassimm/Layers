"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.5 : 1;
    }
  }, [isHovered]);

  const textRow = (
    <div className="flex flex-none gap-16 text-7xl md:text-8xl">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="flex justify-center items-center gap-16"
        >
          <span className="transition-colors duration-300 text-green-500">
            &#10038;
          </span>
          <span className="transition-colors duration-300 group-hover:text-green-500">
            Try it for free
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 overflow-x-hidden">
      <motion.div
        ref={scope}
        className="flex w-max group" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {textRow}
        {textRow}
      </motion.div>
    </section>
  );
}
