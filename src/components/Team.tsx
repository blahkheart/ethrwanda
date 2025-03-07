import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";
import { team4, team1 } from "@/assets/images";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: team1,
    name: "Danny Thomx",
    position: "Founder",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/dannithomx/",
      },
      {
        name: "Twitter",
        url: "https://www.x.com/dannithomx",
      },
      {
        name: "Github",
        url: "https://www.github.com/blahkheart",
      },
    ],
  },
  {
    imageUrl: "https://github.com/shadcn.png",
    name: "Jabo Prosper",
    position: "Operations Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "/#",
      },
      {
        name: "Twitter",
        url: "/#",
      },
      {
        name: "Github",
        url: "/#",
      },
    ],
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E03AQHOXr0L7UUSPg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1647677484479?e=1746662400&v=beta&t=XPNEUN-UQsSl3Va9I5TMNTXD13YaGHpTrmJAXXi3rH8",
    name: "Herve",
    position: "Graphics Design",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/kajyambere-herve-patience-20911a219/",
      },

      {
        name: "Twitter",
        url: "/#",
      },
      {
        name: "Github",
        url: "/#",
      },
    ],
  },
  {
    imageUrl: "https://github.com/shadcn.png",
    name: "Kelly",
    position: "Media coverage",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "/#",
      },
      {
        name: "Twitter",
        url: "/#",
      },
      {
        name: "Github",
        url: "/#",
      },
    ],
  },
  {
    imageUrl: team4,
    name: "Joab",
    position: "Partnerships",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/joab-niwagaba-0905161b3",
      },
      {
        name: "Twitter",
        url: "https://x.com/niwagaba_joab?s=21",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Twitter":
        return <Twitter size="20" />;

      case "Github":
        return <Github size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32 mb-36">
      <h2 className="text-3xl md:text-5xl text-center font-bold mb-10">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Team
        </span>
      </h2>

      <p className="mt-4 text-xl text-muted-foreground text-center mb-36">
        Meet the team that makes it all possible.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center ">{name}</CardTitle>
                <CardDescription className="text-primary ">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
