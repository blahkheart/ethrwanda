import { Gallery6 } from "@/components/ui/gallery6";
import { medRecordChain, stoneProof } from "@/assets/images";

const winningProjectsData = {
  heading: "ETH Rwanda Hackathon Genesis 2024 Winners",
  demoUrl: "https://hackathon.ethrwanda.rw",
  items: [
    {
      id: "item-1",
      title: "MedRecordChain",
      summary:
        "MedRecord Chain secures medical data sharing via blockchain, ensuring privacy, integrity, and patient control while enabling seamless access for authorized providers, improving healthcare efficiency and trust.",
      url: "https://dorahacks.io/buidl/18123",
      image: medRecordChain,
    },
    {
      id: "item-2",
      title: "Startup Raise Funds",
      summary:
        "Traditional Fund raising for startup lack proper way of secure process of attaracting investors and transparency in fund usage",
      url: "https://dorahacks.io/buidl/18109",
      image:
        "https://cdn.dorahacks.io/static/files/192cccaa3c35276b621c2c6412dbd53d.jpeg@128h.webp",
    },
    {
      id: "item-3",
      title: "Stone Proof",
      summary:
        "StoneProof boosts transparency in the mineral supply chain. Using Ethereum and smart contracts, it ensures secure, traceable certification of assets, promoting integrity and accountability from source to end-user.",
      url: "https://dorahacks.io/buidl/18148",
      image: stoneProof,
    },
  ],
};


export const WinningProjects = () => {
  return <Gallery6 {...winningProjectsData} />;
};
