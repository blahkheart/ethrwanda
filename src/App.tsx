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
import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "@/assets/images";
import { Contact } from "./components/Contact";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "If you’re thinking of coming to an ETH Rwanda event, I was say definitely do it tech and the digital advancement is part of the new frontier of humanity and society and learning how to work with these kinds of programs as opposed to fearing them because they’re unknown is overall helpful",
    name: "Kameelah",
    designation: "Participant",
    src: testimonial1,
  },
  {
    quote: "Being part of ETH-Rwanda has been an incredible journey for me. From the moment I joined, I felt welcomed into a community that’s not just passionate about blockchain, but also deeply committed to helping developers like me grow. ETH-Rwanda gave me my first real chance to showcase my skills at the ETH-Rwanda Hackathon, where I got to collaborate, learn, and even walk away with a prize! Beyond that, the knowledge, connections, and opportunities I’ve gained from this community are unmatched. I’m truly grateful to be part of ETH-Rwanda, and I’m excited to keep growing alongside this amazing team — and I’m confident this is just the beginning of many more wins with ETH-Rwanda by my side!",
    name: "Jonas Sebera",
    designation: "Participant",
    src: testimonial2,
  },
  {
    quote:
      "This is a very good thing, it is a very good kind of idea. One thing most Rwandans fear about cryptocurrency, forex trading and things like that is scamming, but for me what I learnt from Ethereum is this is not a scam, it is a very real thing that works!",
    name: "Ben Ishimwe",
    designation: "Participant",
    src: testimonial3,
  },
  {
    quote:
      "ETH Rwanda’s workshops took me from a total beginner to building my own projects in no time! The hands-on learning, supportive community, and exciting hackathon experience gave me the confidence to dive into the Web3 space!",
    name: "Olivier",
    designation: "Participant",
    src: testimonial4,
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
      <Contact />
      <Footer />
      <ScrollToTop />
    </AnimatePresence>
  );
}

export default App;
