import { Gallery6 } from "@/components/ui/gallery6";

const demoData = {
  heading: "ETH Rwanda Hackathon Genesis 2024 Winners",
  demoUrl: "https://hackathon.ethrwanda.rw",
  items: [
    {
      id: "item-1",
      title: "MedRecordChain",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-2",
      title: "Startup Raise Funds",
      summary:
        "Explore our library of customizable components built with shadcn/ui and Tailwind CSS.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-3",
      title: "Stone Proof",
      summary:
        "Build websites that look great on any device with our responsive design patterns.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    }
  ],
};


export const WinningProjects = () => {
  return <Gallery6 {...demoData} />;
};
