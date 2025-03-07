import { WobbleCard } from "./ui/wobble-card";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const LampCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.1, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Mission & Vision
      </motion.h1>
      <motion.div
        initial={{ opacity: 0.5, y: -250 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-24 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto md:px-8 w-full">
          {children}
        </div>
      </motion.div>
    </LampContainer>
  );
};

export const MissionVision = () => {
  return (
    <>
      <LampCard>
        <WobbleCard containerClassName="col-span-1">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Mission
          </h2>
          <p className="mt-4  text-left  text-base/6 text-neutral-200">
            Our mission is to drive blockchain adoption and create positive-sum
            outcomes and externalities in Rwanda, Africa and the world through
            innovation and collaboration using Ethereum.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Vision
          </h2>
          <p className="mt-4  text-left  text-base/6 text-neutral-200">
            Our vision is to become an autonomous, self-sustaining, and
            self-organizing community of developers, entrepreneurs, creators and
            enthusiasts making positive real-world impact by building functional
            and sustainable solutions to local challenges using blockchain
            technology.
          </p>
        </WobbleCard>
      </LampCard>
    </>
  );
};
