'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'How do I see how much time I spend on Instagram?',
    answer:
      'You can check your average daily screen time directly inside the Instagram mobile app. Tap your profile icon in the bottom-right corner, open the menu (☰) in the top-right corner, select "Your activity", and tap "Time spent". Instagram displays your daily average prominently at the top.',
  },
  {
    question: 'Where can I find my average Instagram time in the app?',
    answer:
      'Go to Instagram > Profile > Menu (☰) > Your activity > Time spent. Instagram reports your average daily time for the past week, which you can input into ScrollBack as your baseline daily usage.',
  },
  {
    question: 'Can I see how many Reels I have watched?',
    answer:
      'Instagram does not show a public counter for total Reels watched. ScrollBack calculates an estimated Reel count based on your total viewing time and an assumed average Reel duration of 15 seconds per short video.',
  },
  {
    question: 'How does ScrollBack calculate my cumulative time?',
    answer:
      'ScrollBack multiplies your reported daily Instagram average minutes by the total number of elapsed calendar days between your chosen starting year and today. It then converts those total minutes into full 24-hour days, 16-hour waking days, and decimal years.',
  },
  {
    question: 'Is the number of Reels watched exact?',
    answer:
      'No. The number of Reels watched is an estimated calculation based on average short-form video length (15 seconds per video). Because user viewing speed varies, ScrollBack presents this number as a contextual scale estimate rather than a measured fact.',
  },
  {
    question: 'Does ScrollBack connect to or scrape my Instagram account?',
    answer:
      'No. ScrollBack never asks for your Instagram login, password, or API permissions. It does not connect to or scrape your account. You manually enter the average daily time that Instagram already displays for you.',
  },
  {
    question: 'Does ScrollBack store my Instagram data?',
    answer:
      'No. ScrollBack operates entirely client-side in your web browser. Your entered daily time and calculation results are stored locally in your browser storage (`localStorage`) and are never sold or sent to remote servers.',
  },
  {
    question: 'Can I use the calculator without logging in or creating an account?',
    answer:
      'Yes. ScrollBack is 100% free and requires no signup, email, password, or account creation. You can use the calculator instantly without logging in.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="py-20 bg-surface-50 border-b border-editorial-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-left space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions About Instagram Screen Time
          </h2>
          <p className="text-sm text-editorial-muted">
            Everything you need to know about calculating your Instagram usage, short video statistics, and privacy transparency.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 text-left">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-editorial-border bg-background transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left font-sans font-bold text-white hover:text-accent-coral transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-editorial-dim shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-accent-coral' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-sm text-editorial-cream leading-relaxed border-t border-editorial-border/40 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
