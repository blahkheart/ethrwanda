import { HeroParallax } from "./ui/hero-parallax";

const images = [
  {
    title: "ETH Rwanda Awarding Ceremony",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405107.jpg",
  },
  {
    title: "ETH Rwanda Awarding Ceremony",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405003.jpg",
  },
  {
    title: "ETH Rwanda Awarding Ceremony",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405093.jpg",
  },

  {
    title: "ETH Rwanda Social Hour",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/eth_social_hour/A7404330-2-Enhanced-NR.jpg",
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403818.JPG",
  },
  {
    title: "Ethereum For Everyone | Non-Technical Workshop",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/non_technical_workshop_1/pictures/A7403599.JPG",
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/non_technical_workshop_part_2-photos/A7403649-Enhanced-NR.jpeg",
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403814.JPG",
  },
  {
    title: "ETH Rwanda Hackathon: Genesis | Project Presentation",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/project_presentation/pictures/A7404598.jpg",
  },
  {
    title: "Ethereum For Everyone | Non-Technical Workshop",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/non_technical_workshop_part_2-photos/A7403646-Enhanced-NR.jpeg",
  },
  {
    title: "Ethereum For Everyone | Non-Technical Workshop",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/non_technical_workshop_part_2-photos/A7403663-Enhanced-NR.jpeg",
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/technical_workshop_1/A7403752.jpg",
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/technical_workshop_1/A7403794.jpg",
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403826.JPG",
  },
  {
    title: "Ethereum For Everyone | Technical Workshop",
    link: "/#",
    thumbnail:
      "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403816.JPG",
  },
];

export const Hero = () => {
  return <HeroParallax products={images} />;
};
