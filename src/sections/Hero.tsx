"use client";

import Buttons from "../components/Buttons";
import Image from "next/image";
import Dashboard from "../assets/images/Dashboard.png";
import Pointer from "../components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }]
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 100, y: [0, 8, 0] },
        { duration: 0.5, ease: "easeIn" }]
    ]);

    rightDesignAnimate([
        [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay:1.5 }],
        [rightDesignScope.current, { x:0, y:0 }, { duration: 0.5 }]
    ]);

    rightPointerAnimate([
        [rightPointerScope.current, {opacity:1} , {duration:0.5 , delay:1.5}],
        [rightPointerScope.current, {x:175, y:10}, {duration:0.5}],
        [rightPointerScope.current, {x:0, y:[10,20,10]}, {duration:0.5}],
      
    ])
  }, []);

  return (
    <section className="py-24  overflow-x-clip">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 100, x: -100 }}
          ref={leftDesignScope}
          className="absolute -left-52 top-5 hidden lg:block"
          drag
        >
          <Image src={Dashboard} alt="Left dashboard" className="w-80" draggable={false}/>
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-6 top-96 hidden lg:block"
        >
          <Pointer name="Muhammad" />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x:100, y:100}} 
          drag
          className="absolute -right-72 -top-15 hidden lg:block"
        >
          <Image src={Dashboard} alt="right dashboard" draggable={false} />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute right-55 -top-4 hidden lg:block" 
        >
          <Pointer name="Qasim" color="orange" />
        </motion.div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $10M seed round raised
          </div>
        </div>
        <h1 className="text-6xl  md:text-7xl lg:text-8xl font-medium text-center mt-6  max-w-5xl mx-auto">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Designs tools shouldn&apos;t slow you down. Layers combine powerful
          features with an intuative interface that in your creative flow.
        </p>

        <form
          action=""
          className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter Email"
            className="bg-transparent px-4 flex-1 outline-none w-full"
          />
          <Buttons
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Buttons>
        </form>
      </div>
    </section>
  );
}
