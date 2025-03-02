import InteractiveBentoGallery from "./ui/interactive-bento-gallery";

export function PastEventsGallery() {
  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "ETH Rwanda Awarding Ceremony",
      desc: "Celebrating achievements",
      url: "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405107.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "ETH Rwanda Social Hour",
      desc: "Networking and connections",
      url: "https://p2einferno.com/eth-rwanda/eth_social_hour/A7404330-2-Enhanced-NR.jpg",
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Ethereum For Everyone | Technical Workshop",
      desc: "Hands-on learning experience",
      url: "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403818.JPG",
      span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
    },
    {
      id: 4,
      type: "image",
      title: "Ethereum For Everyone | Non-Technical Workshop",
      desc: "Blockchain for everyone",
      url: "https://p2einferno.com/eth-rwanda/non_technical_workshop_1/pictures/A7403599.JPG",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 5,
      type: "image",
      title: "ETH Rwanda Hackathon: Genesis | Project Presentation",
      desc: "Innovative project showcase",
      url: "https://p2einferno.com/eth-rwanda/project_presentation/pictures/A7404598.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 6,
      type: "image",
      title: "Ethereum For Everyone | Technical Workshop",
      desc: "Deep dive into Ethereum",
      url: "https://p2einferno.com/eth-rwanda/technical_workshop_1/A7403752.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 7,
      type: "image",
      title: "ETH Rwanda Awarding Ceremony",
      desc: "Celebrating success stories",
      url: "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405093.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    },
  ];

  return (
    <div>
      <InteractiveBentoGallery mediaItems={mediaItems} title="Gallery" />
    </div>
  );
}
