import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is ETH Rwanda?",
    answer:
      "ETH Rwanda is a community-focused initiative that aims to educate, coach, connect, and inspire builders, entrepreneurs, creators, and enthusiasts to leverage Ethereum and decentralized technology to build solutions to local challanges in Rwanda.",
    value: "item-1",
  },
  {
    question: "How can I participate in ETH Rwanda events and workshops?",
    answer:
      "You can join our online community channels (WhatsApp, Instagram, or X) for updates and upcoming event announcements. You can also subscribe to our newsletter to get notified when we organize hackathons, workshops, or other in-person events in Kigali and other cities in Rwanda.",
    value: "item-2",
  },
  {
    question: "Why should I learn to build on Ethereum?",
    answer:
      "Ethereum is a global, decentralized, and permissionless platform for creating smart contracts and decentralized applications (dApps). Learning to build on Ethereum can open the door to cutting-edge innovations, collaboration with a worldwide developer community, and opportunities to shape the future of finance and the internet.",
    value: "item-3",
  },
  {
    question: "What resources are available for beginners in Rwanda?",
    answer: `We provide beginner-friendly workshops, tutorials, and mentorship opportunities through our "Ethereum For Everyone" program. Whether you’re a developer, creator, entrepreneur, or just curious, our events span topics from fundamental blockchain concepts, to smart contract development, blockchain best practices and real-world use cases.`,
    value: "item-4",
  },
  {
    question: "How can I get involved or contribute to ETH Rwanda?",
    answer:
      "We welcome community contributions of all kinds. You can speak at events, host or assist in workshops, create educational content, or help organize community hackathons. Reach out through our email or social channels to collaborate!",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-48">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
