"use client";

import Image from "next/image";
import LogoImage from "../assets/images/Logo.svg";
import Buttons from "../components/Buttons";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navlinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integration", href: "#integerations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <section className="py-4 lg:py-8 flex justify-center fixed w-full top-0  z-50">
      <div className="container max-w-5xl ">
        <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur-md md:backdrop-blur-lg">
          <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
            <a href="/">
              <Image src={LogoImage} alt="Logo" className="h-9 w-auto" />
            </a>

            <div className="hidden lg:block  justify-center items-center">
              <nav className=" flex gap-6 font-light">
                {navlinks.map((link, i) => (
                  <Link href={link.href} key={i} className="hover:text-green-500 transition">{link.label}</Link>
                ))}
              </nav>
            </div>

            <div className="flex justify-end gap-4">
              <svg
                xmlns="'http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>

              <Buttons variant="secondary" className="hidden md:block">
                Log In
              </Buttons>
              <Buttons variant="primary" className="hidden md:block">
                Sign Up
              </Buttons>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className=" overflow-hidden"
              >
                <div className="flex flex-col items-center gap-4 py-4">
                  {navlinks.map((link) => (
                    <a href={link.href} key={link.label} onClick={() => setIsOpen(false)}>
                      {link.label}
                    </a>
                  ))}
                
                <Buttons variant="secondary" className="w-sm">
                  Login
                </Buttons>
                <Buttons variant="primary" className="w-sm">
                  Sign up
                </Buttons>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
    <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
    </>
  );
}
