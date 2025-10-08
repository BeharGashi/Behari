import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import "./ScrollToTopButton.css"; // Importo CSS-in

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      aria-label="Scroll to top"
    >
      <RiArrowUpSLine size={28} />
    </button>
  );
};

export default ScrollToTopButton;
