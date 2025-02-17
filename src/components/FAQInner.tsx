"use client";

import React, { useState } from "react";
import Image from "next/image";

const FAQInner = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    { question: "What is the Luck Box project?", answer: "The project operates on Ethereum (for security/decentralization) or Binance Smart Chain (for lower fees/faster transactions)." },
    { question: "How do I purchase a trading box?", answer: "Users deposit USDT into the platform to purchase trading boxes, which are available in fixed amounts (e.g., $100, $500, $1,000). Each box is assigned a unique ID via smart contracts." },
    { question: "What daily profit can I expect from my investment?", answer: "Investors earn 0.5% daily profit on their invested amount. This can increase by 0.1% per correct Bitcoin prediction, up to a maximum of 0.5% (total 1% daily)." },
    { question: "How does the Bitcoin price prediction game work?", answer: "Users predict whether Bitcoin’s price will rise or fall in the next period. Correct predictions boost daily profits, while incorrect ones have no penalty." },
    { question: "When is my invested capital released?", answer: "Capital is automatically released once your total profit reaches 50%–100% of your initial investment, tracked via smart contracts." },
    { question: "Which blockchain platforms does Luck Box use?", answer: "The project operates on Ethereum (for security/decentralization) or Binance Smart Chain (for lower fees/faster transactions)." },
    { question: "How are profits distributed and withdrawn?", answer: "Profits in USDT are distributed daily and can be withdrawn instantly or within a short timeframe through the platform’s withdrawal system." },
    { question: "What is the initial guarantee fund?", answer: "A $5,000 reserve locked in the smart contract to ensure investor confidence and cover initial payouts." },
    { question: "How does Luck Box ensure security?", answer: "Security measures include audited smart contracts, multi-signature wallets for funds, and real-time data transparency for users." },
    { question: "Is there a mobile app for Luck Box?", answer: "While no standalone app exists, the web application is fully responsive and optimized for mobile devices." },
    { question: "What oracles are used for Bitcoin price data?", answer: "Chainlink oracles provide real-time Bitcoin price feeds to ensure accurate prediction game results." },
    { question: "Are smart contracts audited?", answer: "Yes, independent audits are conducted to identify and fix vulnerabilities before launch." },
    { question: "What happens if I make incorrect Bitcoin predictions?", answer: "Incorrect predictions do not reduce your base 0.5% daily profit—only correct guesses increase earnings." },
    { question: "What legal compliance measures are in place?", answer: "The project adheres to regulations in operational jurisdictions, though users should review local laws before participating." },
    { question: "How long does development take?", answer: "The timeline spans six phases: Planning, Smart Contract Development, UI Design, Testing, Audit, and Launch. Specific dates will be announced post-approval." },
  ];

  return (
    <div className="faq-detail-sec">
      {/* Background Images */}
      <div className="faq-d1">
        <Image src="/img/faq-d1.png" alt="FAQ Decoration" width={300} height={300} />
      </div>
      <div className="faq-d2">
        <Image src="/img/faq-d2.png" alt="FAQ Decoration" width={300} height={300} />
      </div>

      {/* FAQ Content */}
      <div className="container-1470">
        <div className="row">
          <div className="heading-text">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="faq-row">
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <span>
                    <span className="serial">{String(index + 1).padStart(2, "0")}</span> {faq.question}
                  </span>
                  <span className="accordion-icon">{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="our-blog details-blogs">
        <div className="container-1470">
          <div className="heading">
            <h2>Our Blog</h2>
          </div>
          <div className="row">
            {[1, 2, 3, 4].map((_, index) => (
              <div className="blog-box" key={index}>
                <div className="blog-img">
                  <Image src="/img/blog-img.png" alt="Blog Image" width={300} height={200} />
                </div>
                <div className="blog-content">
                  <p>What is BTC (Bitcoin) and how can you buy it?</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQInner;
