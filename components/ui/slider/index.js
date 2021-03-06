import Slide from "./slide";
import propTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Slider({ items }) {
  // Add a listener to sliderRef to detect when the user scrolls
  const sliderRef = useRef(null);
  useEffect(() => {
    const current = sliderRef.current;
    current.addEventListener("scroll", handleScroll);
    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [sliderRef]);

  // Keep track of scroll position to handle slider control
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const handleScroll = () => {
    const current = sliderRef.current;
    const { scrollWidth, scrollLeft } = current;
    const { clientWidth } = current.parentElement;
    const maxScrollLeft = scrollWidth - clientWidth;
    const isScrolledToEnd = scrollLeft === maxScrollLeft;
    const isScrolledToStart = scrollLeft === 0;

    if (isScrolledToEnd) {
      setScrollRight(false);
      setScrollLeft(true);
    } else if (isScrolledToStart) {
      setScrollLeft(false);
      setScrollRight(true);
    } else {
      setScrollLeft(true);
      setScrollRight(true);
    }
  };

  // Scroll to the next item
  function scrollToRight() {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    setScrollLeft(true);
    // If the scroll is at the end, disable the scroll right button
    if (
      sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
      sliderRef.current.scrollWidth
    ) {
      setScrollRight(false);
    }
  }

  // Scroll to the previous item
  function scrollToLeft() {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    if (sliderRef.current.scrollLeft <= 0) {
      setScrollLeft(false);
    }
    setScrollRight(true);
  }

  // For each item a slide
  const slides = items?.map((item) => <Slide key={item.id} {...item} />);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: 1.25 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <div aria-label="Slider navigation">
        {/* LEFT ARROW */}
        <button
          className={!scrollLeft ? "text-slate-400" : "text-teal-600"}
          onClick={scrollToLeft}
          disabled={!scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* RIGHT ARROW */}
        <button
          className={`ml-2 ${
            !scrollRight ? "text-slate-400" : "text-teal-600"
          }`}
          onClick={scrollToRight}
          disabled={!scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`flex flex-row max-w-full gap-4 overflow-x-auto snap-mandatory snap-x pb-8 scrollbar scrollbar-thumb-teal-600 scrollbar-track-slate-300`}
        ref={sliderRef}
      >
        {slides}
      </div>
    </motion.div>
  );
}

Slider.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      image: propTypes.string,
    })
  ),
};
