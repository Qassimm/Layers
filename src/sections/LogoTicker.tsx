"use client";

import React from "react";
import logo1 from "../assets/logos/logo1.svg";
import logo2 from "../assets/logos/logo2.svg";
import logo3 from "../assets/logos/logo3.svg";
import logo4 from "../assets/logos/logo4.svg";
import logo5 from "../assets/logos/logo5.svg";
import logo6 from "../assets/logos/logo6.svg";
import logo7 from "../assets/logos/logo7.svg";
import logo8 from "../assets/logos/logo8.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "logo-1", image: logo1 },
  { name: "logo-2", image: logo2 },
  { name: "logo-3", image: logo3 },
  { name: "logo-4", image: logo4 },
  { name: "logo-5", image: logo5 },
  { name: "logo-6", image: logo6 },
  { name: "logo-7", image: logo7 },
  { name: "logo-8", image: logo8 },
];

export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip flex justify-center">
      <div className="conainer  ">
        <h3 className="text-center text-white/50 text-xl  ">
          Already chosen by these market leaders
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div className="flex flex-none gap-24 pr-2 mt-10"
          animate={{x:'-50%'}}
          transition={{duration:30, ease:'linear' , repeat:Infinity}}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <Image src={logo.image} key={logo.name} alt="logos" />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
