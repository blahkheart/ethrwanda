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
import { useEffect, useState, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/ui/loading";
import { Skeleton } from "@/components/ui/skeleton";

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
    // initial app loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16">
              Past Events & Workshops
            </h2>
            <Skeleton layout="timeline" count={2} />
            <div className="mt-24 mb-16">
              <h3 className="text-3xl lg:text-5xl text-center font-bold mb-16">
                Interviews
              </h3>
              <Skeleton layout="list" aspectRatio="video" count={3} />
            </div>
          </div>
        }
      >
        <PastEvents />
      </Suspense>
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
    </AnimatePresence>
  );
}

export default App;
