"use client";

import { twMerge } from "tailwind-merge";
import Tag from "../components/Tag";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "Hows is Layers different from others ?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed simpicity without sacrificing power.Our intelligent inrterface adapt to your workflow, reducing click and keeping you in creative flow.",
  },
  {
    question: "Is there a learning curve ?",
    answer:
      "Layers is design to feel intuitive from day one.Most designers are productive wih in hour,not weeks.We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version controls?",
    answer: "Every changes in Layers is automatically saved and versioned.You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer: "Yes! Layers include a robust offline mode.Changes sync automatically when you're back online, so you can keep working anywhere",
  },
  {
    question: "How does Layers handle collaboration?",
    answer: "Layers is built for collboration.You can invite team members to your projects,share feedback and work together in real-time.",
  },
];

export default function FAQs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="faqs" className="py-24 p-5 flex justify-center items-center">
      <div className="container">
        <div className="text-center">
          <Tag>FAQs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got <span className="text-green-500">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6 "
            >
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <svg
                  xmlns="'http://www.w3/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-green-500 flex-shrink-0",
                    selectedIndex == faqIndex &&
                      "rotate-45 transition-all duration-300"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <AnimatePresence>
              {selectedIndex === faqIndex && (
                <motion.div
                initial={{
                    height:0,
                    marginTop:0
                }}
                animate={{
                    height:'auto',
                    marginTop:'24'
                }}
                  className={twMerge(
                    "mt-6 overflow-hidden",
                  )}
                >
                  <p className="text-white/50 ">{faq.answer}</p>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
