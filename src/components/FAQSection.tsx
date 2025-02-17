// src/components/FAQSection.tsx
'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What is the Luck Box project?', answer: 'This is the content for Luck Box project.' },
    { question: 'How do I purchase a trading box?', answer: 'This is the content for purchasing a trading box.' },
    { question: 'What daily profit can I expect from my investment?', answer: 'This is the content for daily profit expectations.' },
    { question: 'How does the Bitcoin price prediction game work?', answer: 'This is the content for how the Bitcoin price prediction game works.' },
    { question: 'Which blockchain platforms does Luck Box use?', answer: 'This is the content for which blockchain platforms Luck Box uses.' },
    { question: 'How are profits distributed and withdrawn?', answer: 'This is the content for how profits are distributed and withdrawn.' },
    { question: 'What is the initial guarantee fund?', answer: 'This is the content for the initial guarantee fund.' },
    { question: 'How does Luck Box ensure security?', answer: 'This is the content for how Luck Box ensures security.' },
    { question: 'Is there a mobile app for Luck Box?', answer: 'This is the content for the mobile app for Luck Box.' },
    { question: 'What oracles are used for Bitcoin price data?', answer: 'This is the content for the oracles used for Bitcoin price data.' },
    { question: 'Are smart contracts audited?', answer: 'This is the content for whether smart contracts are audited.' },
    { question: 'What happens if I make incorrect Bitcoin predictions?', answer: 'This is the content for what happens if you make incorrect Bitcoin predictions.' },
    { question: 'What legal compliance measures are in place?', answer: 'This is the content for legal compliance measures in place.' },
    { question: 'How long does development take?', answer: 'This is the content for how long development takes.' },
  ];

  return (
    <div className="faq-section">
      <div className="container-1470">
        <div className="heading">
          <h2>Frequently Asked Questions</h2>
          <p>Follow design trends and continually update your skills by learning new tools and techniques.</p>
        </div>
        <div className="faq-row">
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>
                    <span className="serial">{String(index + 1).padStart(2, '0')}</span> {faq.question}
                  </span>
                  <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
