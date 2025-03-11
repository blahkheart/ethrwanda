import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  technicalWorkshop1_1,
  technicalWorkshop1_3,
  technicalWorkshop4_1,
  awardingCeremony3,
} from "../assets/images";

const EventItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className=" text-neutral-700 dark:text-neutral-300 text-xs md:text-lg mb-2"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex gap-2 items-center"
      >
        <CheckCircle className="w-5 h-5 text-[#2ABA46]" />
        {children}
      </motion.div>
    </motion.div>
  );
};

export function PastEventsTimeline() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Kickstarted Ethereum For Everyone initiative season 1
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={technicalWorkshop1_1}
              alt="Ethereum For Everyone | Non-Technical Workshop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={technicalWorkshop1_3}
              alt="Ethereum For Everyone | Technical Workshop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={technicalWorkshop4_1}
              alt="Ethereum For Everyone | Technical Workshop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={awardingCeremony3}
              alt="ETH Rwanda Hackathon Awarding Ceremony"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Events",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
            Workshops and activities
          </p>
          <div className="mb-8">
            <EventItem>Ethereum For Everyone | Creators Workshop</EventItem>
            <EventItem>
              Ethereum For Everyone | Entrepreneurs Workshop
            </EventItem>
            <EventItem>Ethereum For Everyone | Developer Workshops</EventItem>
            <EventItem>ETH Rwanda Social Hour</EventItem>
            <EventItem>ETH Rwanda Hackathon: Genesis</EventItem>
            <EventItem>ETH Rwanda Hackathon Awarding Ceremony</EventItem>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
