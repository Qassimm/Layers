"use client";

import { useScroll, useTransform } from "framer-motion";
import Tag from "../components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Introduction() {
  const text = `You're racing to create exceptional work, but traditional design tools slow you down with uneccessary complexity and steep learning curves`;
  const words = text.split(' ');
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

   const [currentWord, setCurrentWord] = useState(0);
   const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(() => {
    wordIndex.on('change', (latest) => {
        setCurrentWord(latest);
    })
  }, [wordIndex])
  return (
    <section className="py-28 lg:py-40 flex justify-center px-5 ">
      <div className="container">
        <div className="sticky top-28 md:top-5 lg:top-35">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center lg:leading-19 font-medium mt-5 ">
            <span>Your creative process deserve better.</span>
            <span className="">{words.map(((word, wordIndex) =>(
                <span key={wordIndex} className={twMerge('transition duration-500 text-white/15', wordIndex < currentWord && 'text-white')}>{`${word} `}</span>
            )))}</span>
            <span className="text-green-500 block">
              That&apos;s why we build Layers
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
}
