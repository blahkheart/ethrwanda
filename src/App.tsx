import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Initiatives } from "./components/Initiatives";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { AnimatedTestimonials } from "./components/Testimonials";
import { MissionVision } from "./components/MissionVision";
import "./App.css";
import PastEvents from "./components/PastEvents";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/ui/loading";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "This landing page is awesome!",
    name: "John Doe React",
    designation: "@john_Doe",
    src: "https://github.com/shadcn.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    name: "John Doe React",
    designation: "@john_Doe1",
    src: "https://github.com/shadcn.png",
  },

  {
    quote:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "John Doe React",
    designation: "@john_Doe2",
    src: "https://github.com/shadcn.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
    name: "John Doe React",
    designation: "@john_Doe3",
    src: "https://github.com/shadcn.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
    name: "John Doe React",
    designation: "@john_Doe4",
    src: "https://github.com/shadcn.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe React",
    designation: "@john_Doe5",
    src: "https://github.com/shadcn.png",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if all images are loaded
    const loadImages = async () => {
      const images = document.querySelectorAll("img");
      const promises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);
    };

    // Check both DOM content and image loading
    Promise.all([
      // Wait for DOM content
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => {
            window.addEventListener("load", resolve, { once: true });
          }),
      // Wait for images
      loadImages(),
    ]).then(() => {
      // Add a small buffer to ensure smooth transition
      setTimeout(() => setIsLoading(false), 300);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Hero />
          <PastEvents />
          <MissionVision />
          <Sponsors />
          <Initiatives />
          <AnimatedTestimonials testimonials={testimonials} />
          <Cta />
          <Team />
          <Newsletter />
          <FAQ />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
