import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            ETHereum For Everyone
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Season 2{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Enroll for the 2025 workshops and training.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button disabled className="w-full md:mr-4 md:w-auto">Coming Soon</Button>
        </div>
      </div>
    </section>
  );
};
