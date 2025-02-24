import { getRandomNumber } from "@/lib/utils";
import { useState } from "react";

const useParticleProperties = () => {
  const [properties] = useState(() => ({
    quantity: getRandomNumber(100, 500),
    staticity: getRandomNumber(10, 50),
    ease: getRandomNumber(10, 80),
  }));

  return properties;
};

export default useParticleProperties;
