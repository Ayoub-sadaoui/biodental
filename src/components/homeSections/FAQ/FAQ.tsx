"use client";
import * as React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Card, CardContent } from "../../ui/card";
import { motion } from "framer-motion";
import { extractPlainText } from "../../../lib/cmsHelpers";

const MotionContent = motion(CardContent);

const defaultFaqItems = [
  {
    question: "What is the cost of a dental bridge in Algeria?",
    answer:
      "Prices range from 20,000 DZD to 80,000 DZD, depending on materials and the number of missing teeth. At BioDental, we offer biocompatible bridges with clear pricing after a first consultation.",
  },
  {
    question: "How often should I see my dentist during orthodontic treatment?",
    answer:
      "A. It is important to continue to see your dentist for regular check-ups and cleanings during orthodontic treatment. Your dentist can help monitor your oral health and ensure that your teeth and gums remain healthy during treatment. They can also provide advice on how to properly care for your teeth and braces or aligners.",
  },
  {
    question: "Which dental braces are right for me?",
    answer:
      "It depends on your age, goals, and budget. BioDental offers a full scan and custom treatment plan to recommend the most suitable braces for your smile.",
  },
];

export const FAQ = ({ homepage }: { homepage?: any }) => {
  const data = homepage?.data || {};

  const faqItems =
    Array.isArray(data.faqs) && data.faqs.length > 0
      ? data.faqs.map((item: any) => ({
          question: item.question,
          answer: item.answer,
        }))
      : defaultFaqItems;

  return (
    <div className="w-full py-[60px] md:py-20 bg-[#9aae92] px-[20px] md:px-[30px] lg:px-0">
      <div className="max-w-[1050px] mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9aae92] px-3">
          <h2 className="font-playfair-important font-bold text-[#2b3029] text-[45.5px] tracking-[-0.80px] leading-[60px]">
            {data.faq_title || "FAQs"}
          </h2>
        </div>

        <Card className="rounded-2xl border-2 border-solid border-[#f7f7f5] mt-0 md:mt-8 pt-5 md:pt-14">
          <MotionContent
            className="p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item: any, index: number) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-t border-[#f7f7f5] py-2"
                >
                  <AccordionTrigger className="flex items-center gap-6 hover:no-underline group">
                    <span className="relative flex items-center justify-center">
                      <AiOutlinePlus className="h-[30px] w-[30px] flex-shrink-0 text-white transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </span>
                    <span className="text-left text-[20px] md:text-[22px] font-medium text-[#2b3029]">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="relative overflow-hidden text-[16px] md:text-[17.3px] md:tracking-[0.18px] md:leading-[25.2px] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pt-4 border-t border-[#f7f7f5]"
                    >
                      <div className="pl-[54px]">
                        {extractPlainText(item.answer)}
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </MotionContent>
        </Card>
      </div>
    </div>
  );
};
