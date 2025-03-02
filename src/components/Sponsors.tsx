import { Marquee } from "@/components/ui/marquee";
import {
  unlockLogo,
  abiLogo,
  bgLogo,
  espLogoBlack,
  makerStudioLogo,
  kpakLogo,
  p2eInfernoLogo,
} from "@/assets/logos";

const sponsors = [unlockLogo, bgLogo, espLogoBlack];
const partners = [makerStudioLogo, kpakLogo, abiLogo, p2eInfernoLogo];

export const Sponsors = () => {
  const getSponsorClassNames = (index: number) => `bg-white backdrop-blur-sm rounded-xl ${
    index === 0 ? "p-0" : "p-6"
    } hover:bg-white/10 transition-all duration-300 shadow-lg`;
  
  const getPartnerClassNames = (index: number) =>
    `bg-white backdrop-blur-sm rounded-xl ${
      index < 2 ? "p-0" : "p-6"
    } hover:bg-white/10 transition-all duration-300 shadow-lg`;
  
  return (
    <section
      id="sponsors-partners"
      className="flex flex-col pt-24 sm:py-32 bg-[#020617]"
    >
      <div id="sponsors" className="container mb-36">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-primary mb-24">
          Sponsors
        </h2>

        <div className="flex flex-wrap justify-center items-center">
          <Marquee>
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="relative h-full w-fit mx-[6rem] flex items-center justify-center"
                style={{ maxWidth: "300px", minWidth: "150px" }}
              >
                <div className={getSponsorClassNames(index)}>
                  <img
                    src={sponsor}
                    alt={`sponsor-${index}`}
                    className="max-h-[100px] w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div id="partners" className="container my-24">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-primary mb-24">
          Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center mb-28">
          <Marquee direction="right" speed={15}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative h-full w-fit mx-[6rem] flex items-center justify-center"
                style={{ maxWidth: "300px", minWidth: "150px" }}
              >
                <div className={getPartnerClassNames(index)}>
                  <img
                    src={partner}
                    alt={`partner-${index}`}
                    className="max-h-[100px] w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
