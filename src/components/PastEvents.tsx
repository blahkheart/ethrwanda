import { Particles } from "./ui/particles";
import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";
import useParticleProperties from "@/hooks/useParticleProperties";
import { PastEventsTimeline } from "./EventsTimeline";
import { PastEventsGallery } from "./PastEventsGallery";
import { InterviewCarousel } from "./InterviewsCarousel";
import { WinningProjects } from "./WinningProjects";

const interviews = [
  {
    id: 1,
    title: "Interview with Katrina Chi",
    description: "Discussing her experience with ETH Rwanda",
    thumbnailSrc:
      "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_katrina_chi.png",
    videoSrc:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/videos/a7420241108_1207_2.mp4",
  },
  {
    id: 2,
    title: "Interview with First Team",
    description: "Discussing their project at ETH Rwanda Hackathon",
    thumbnailSrc:
      "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_first_team.png",
    videoSrc:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/videos/first_team.mp4",
  },
  {
    id: 3,
    title: "Interview with Fourth Team",
    description: "Discussing their project at ETH Rwanda Hackathon",
    thumbnailSrc:
      "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_fourth_team.png",
    videoSrc:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/videos/a7420241108_1207_2.mp4",
  },
  {
    id: 4,
    title: "Interview with RCA Instructor",
    description: "Talking about the RCA program",
    thumbnailSrc:
      "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_rca_instructor.png",
    videoSrc:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/videos/a7420241108_1207_2.mp4",
  },
  {
    id: 5,
    title: "Interview with Second Team",
    description: "Discussing their project at ETH Rwanda Hackathon",
    thumbnailSrc:
      "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_2nd_team.png",
    videoSrc:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/videos/a7420241108_1207_2.mp4",
  },
  {
    id: 6,
    title: "Interview with Third Team",
    description: "Discussing their project at ETH Rwanda Hackathon",
    thumbnailSrc:
      "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_3rd_team.png",
    videoSrc:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/videos/a7420241108_1207_2.mp4",
  },
  // ... more interviews
];



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
          <h2 id="past-events" className="text-4xl lg:text-6xl font-bold text-center mb-44 text-white">
            Past Events & Workshops
          </h2>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <PastEventsTimeline />
            </div>

            <div id="gallery">
              <div className="grid grid-cols-1">
                <PastEventsGallery />
              </div>
            </div>
          </div>

          <div id="interviews" className="my-40">
            <h3 className="text-3xl lg:text-5xl text-center font-bold mb-16">Interviews</h3>
            <div className="grid grid-cols-1 gap-4">
              <InterviewCarousel interviews={interviews} />
            </div>
          </div>

          <div className="mt-11 mb-40">
            <WinningProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
