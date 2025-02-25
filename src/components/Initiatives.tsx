import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  MedalIcon,
  MapIcon,
  PlaneIcon,
  GiftIcon,
  LightBulbIcon,
  MagnifierIcon,
} from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <LightBulbIcon />,
    title: "Education",
    description:
      "Free workshops for onboarding developers into the Ethereum ecosystem.",
  },
  {
    icon: <MagnifierIcon />,
    title: "Women in Web3",
    description: "Initiatives supporting women in blockchain and Web3.",
  },
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "Making blockchain technology accessible to everyone through comprehensive education and hands-on training programs.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Building a vibrant ecosystem of developers, creators, and enthusiasts through collaborative learning and shared experiences.",
  },
  {
    icon: <PlaneIcon />,
    title: "Impact",
    description:
      "Creating positive real-world impact through strategic partnerships and innovative programs across Rwanda.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "Engaging the community through interactive challenges, rewards, and recognition programs that make learning fun.",
  },
];

export const Initiatives = () => {
  return (
    <section
      id="initiatives"
      className="text-center py-10 bg-[#020617]"
    >
      <div className="container">
        <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold mb-16">
          Programs & Initiatives
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-32 text-xl text-muted-foreground">
          Join our community and discover how we're making blockchain technology
          accessible through education, collaboration, and innovative programs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-48">
          {features.map(({ icon, title, description }: FeatureProps) => (
            <Card key={title} className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {icon}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
