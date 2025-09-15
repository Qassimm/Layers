"use client";

import { twMerge } from "tailwind-merge";
import { type integrationType } from "../sections/Integrations";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";
export default function IntegrationColumns(props: {
  Integrations: integrationType;
  className?: string;
  reverse?:boolean
}) {
  const { Integrations, className, reverse } = props;

  return (
    <motion.div
      className={twMerge("flex flex-col  gap-4 pb-4", className)}
      initial={{
        y:reverse? '-50%':'0'
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease:'linear'
      }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {Integrations.map((Integration) => (
            <div
              key={Integration.name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6 "
            >
              <div className="flex justify-center ">
                <Image
                  src={Integration.icon}
                  alt={Integration.name}
                  className="w-24"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{Integration.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {Integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
