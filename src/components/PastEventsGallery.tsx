import InteractiveBentoGallery from "./ui/interactive-bento-gallery";
import {
  awardingCeremony1,
  awardingCeremony3,
  socialHour,
  technicalWorkshop4_1,
  nonTechnicalWorkshop1,
  projectPresentation,
  technicalWorkshop1_1,
  nonTechnicalWorkshop2_1,
  nonTechnicalWorkshop2_3,  
} from "../assets/images";

export function PastEventsGallery() {
  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "ETH Rwanda Awarding Ceremony",
      desc: "Celebrating achievements",
      url: awardingCeremony1,
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "ETH Rwanda Social Hour",
      desc: "Networking and connections",
      url: socialHour,
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Ethereum For Everyone | Non-Technical Workshop",
      desc: "Blockchain for everyone",
      url: nonTechnicalWorkshop2_1,
      span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
    },

    {
      id: 4,
      type: "image",
      title: "Ethereum For Everyone | Non-Technical Workshop",
      desc: "Blockchain for everyone",
      url: nonTechnicalWorkshop1,
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 5,
      type: "image",
      title: "ETH Rwanda Hackathon: Genesis | Project Presentation",
      desc: "Innovative project showcase",
      url: projectPresentation,
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 6,
      type: "image",
      title: "Ethereum For Everyone | Technical Workshop",
      desc: "Deep dive into Ethereum",
      url: technicalWorkshop1_1,
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 7,
      type: "image",
      title: "ETH Rwanda Awarding Ceremony",
      desc: "Celebrating success stories",
      url: awardingCeremony3,
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 8,
      type: "image",
      title: "Ethereum For Everyone | Technical Workshop",
      desc: "Hands-on learning experience",
      url: technicalWorkshop4_1,
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 9,
      type: "image",
      title: "Ethereum For Everyone | Non-Technical Workshop",
      desc: "Blockchain for everyone",
      url: nonTechnicalWorkshop2_3,
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    },
  ];

  return (
    <div>
      <InteractiveBentoGallery mediaItems={mediaItems} title="Gallery" />
    </div>
  );
}
