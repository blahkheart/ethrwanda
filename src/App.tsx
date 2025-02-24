import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { AnimatedTestimonials } from "./components/Testimonials";
import { MissionVision } from "./components/MissionVision";
import "./App.css";
import PastEvents from "./components/PastEvents";

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
      quote: "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    name: "John Doe React",
    designation: "@john_Doe1",
    src: "https://github.com/shadcn.png",
  },

  {
    quote: "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "John Doe React",
    designation: "@john_Doe2",
    src: "https://github.com/shadcn.png",
  },
  {
    quote: "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
    name: "John Doe React",
    designation: "@john_Doe3",
    src: "https://github.com/shadcn.png",
  },
  {
    quote: "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
    name: "John Doe React",
    designation: "@john_Doe4",
    src: "https://github.com/shadcn.png",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe React",
    designation: "@john_Doe5",
    src: "https://github.com/shadcn.png",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PastEvents />
      <MissionVision />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <AnimatedTestimonials testimonials={testimonials} />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
