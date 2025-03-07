import { HeroParallax } from "./ui/hero-parallax";
import {
  awardingCeremony1,
  awardingCeremony2,
  awardingCeremony3,
  socialHour,
  technicalWorkshop4_1,
  technicalWorkshop4_2,
  technicalWorkshop4_3,
  technicalWorkshop4_4,
  nonTechnicalWorkshop1,
  nonTechnicalWorkshop2_1,
  nonTechnicalWorkshop2_2,
  nonTechnicalWorkshop2_3,
  projectPresentation,
  technicalWorkshop1_1,
  technicalWorkshop1_2,
} from "../assets/images";

const images = [
  {
    title: "ETH Rwanda Awarding Ceremony",
    link: "/#hero",
    thumbnail: awardingCeremony1,
  },
  {
    title: "ETH Rwanda Awarding Ceremony",
    link: "/#hero",
    thumbnail: awardingCeremony2,
  },
  {
    title: "ETH Rwanda Awarding Ceremony",
    link: "/#hero",
    thumbnail: awardingCeremony3,
  },
  {
    title: "ETH Rwanda Social Hour",
    link: "/#hero",
    thumbnail: socialHour,
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#hero",
    thumbnail: technicalWorkshop4_1,
  },
  {
    title: "Ethereum For Everyone | Non-Technical Workshop",
    link: "/#hero",
    thumbnail: nonTechnicalWorkshop1,
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "/#hero",
    thumbnail: nonTechnicalWorkshop2_1,
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#hero",
    thumbnail: technicalWorkshop4_2,
  },
  {
    title: "ETH Rwanda Hackathon: Genesis | Project Presentation",
    link: "/#hero",
    thumbnail: projectPresentation,
  },
  {
    title: "Ethereum For Everyone | Non-Technical Workshop",
    link: "/#hero",
    thumbnail: nonTechnicalWorkshop2_2,
  },
  {
    title: "Ethereum For Everyone | Non-Technical Workshop",
    link: "/#hero",
    thumbnail: nonTechnicalWorkshop2_3,
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "/#hero",
    thumbnail: technicalWorkshop1_1,
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#hero",
    thumbnail: technicalWorkshop1_2,
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#hero",
    thumbnail: technicalWorkshop4_3,
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#hero",
    thumbnail: technicalWorkshop4_4,
  },
];

export const Hero = () => {
  return (
    <div id="hero">
      <HeroParallax products={images} />
    </div>
  );
};
