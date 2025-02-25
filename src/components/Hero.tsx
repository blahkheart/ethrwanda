import { HeroParallax } from "./ui/hero-parallax";

const products = [
  {
    title: "ETH Rwanda Community",
    link: "/community",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Web3 Development",
    link: "/web3",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Blockchain Innovation",
    link: "/blockchain",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "DeFi Solutions",
    link: "/defi",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Smart Contracts",
    link: "/smart-contracts",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "NFT Marketplace",
    link: "/nft",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "DAO Governance",
    link: "/dao",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Ethereum Development",
    link: "/ethereum",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Blockchain Education",
    link: "/education",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Web3 Infrastructure",
    link: "/infrastructure",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Crypto Payments",
    link: "/payments",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "DApp Development",
    link: "/dapps",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Token Standards",
    link: "/tokens",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Layer 2 Solutions",
    link: "/layer2",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    title: "Cross-chain Bridge",
    link: "/bridge",
    thumbnail: "https://github.com/shadcn.png",
  },
];

export const Hero = () => {
  return <HeroParallax products={products} />;
};
