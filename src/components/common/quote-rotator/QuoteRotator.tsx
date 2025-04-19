import { useEffect, useState } from "react";
import { QuoteRotatorProps } from "./QuoteRotactor.interface";
import "./QuoteRotator.css";

const QuoteRotator = (props: QuoteRotatorProps) => {
    const { quotes, interval = 10000 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * quotes.length);
        } while (next === prev);
        return next;
      });
    }, interval);

    return () => clearInterval(quoteInterval);

  }, [quotes, interval]);

  const currentQuote = quotes[currentIndex];

  return (
    <>
      <blockquote className="home-speech-bubble home-quote">
        <p className="text-gray-700 font-[300] text-[17px] leading-[1.3]">
          {currentQuote.text}
        </p>
      </blockquote>
      <footer className="flex items-center gap-2 px-4">
        <span className="w-4 h-[2px] bg-gray-400" />
        <img
        width={40}
        height={40}
          className="rounded"
          src={currentQuote.image}
          alt={currentQuote.author}
        />
        <p className="text-[#9f3c3c]">{currentQuote.author}</p>
      </footer>
      </>
  );
};

export default QuoteRotator;
