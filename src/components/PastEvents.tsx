import { Particles } from "./ui/particles";
import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";
import useParticleProperties from "@/hooks/useParticleProperties";
import { PastEventsTimeline } from "./EventsTimeline";
import { PastEventsGallery } from "./PastEventsGallery";


const PastEvents = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const particleProps = useParticleProperties();
    
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
    
  return (
    <div className="relative min-h-screen w-full">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={particleProps.quantity}
        staticity={particleProps.staticity}
        color={color}
        ease={particleProps.ease}
      />

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-44 text-white">
            Past Events & Workshops
          </h2>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <PastEventsTimeline />
            </div>

            <div >
              {/* <h3 className="text-2xl font-bold mb-4 text-white">Gallery</h3> */}
              <div className="grid grid-cols-1">
                <PastEventsGallery />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-white">Interviews</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Add interview videos here */}
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Winning Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Add winning projects here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
