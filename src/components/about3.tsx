import { cn } from "cn";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { Button } from "@/components/ui/button";

interface AboutCompanySection {
  title: string;
  content: string;
  label?: string;
}
interface AboutCompanyLogo {
  src: string;
  alt: string;
  name?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface AboutCompanyProps {
  heading: string;
  description?: string;
  statsHeading?: string;
  statsDescription?: string;
  images?: Image[];
  stats?: Stat[];
  logos?: AboutCompanyLogo[];
  sections?: AboutCompanySection[];
  className?: string;
}

interface About3Props extends AboutCompanyProps {
  breakout?: About3Breakout;
}
type Props = Partial<About3Props>;

const defaultProps: About3Props = {
  heading: "About Us",
  description: "We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age. With years of experience in design and development, we craft beautiful, accessible components that help teams build faster.",
  statsHeading: "Our Achievements in Numbers",
  statsDescription: "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  images: [
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/about-company/photo-1-4x3.jpg",
      alt: "Conference room with a long wood table and red chairs",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/about-company/photo-2-4x3.jpg",
      alt: "Team meeting around a conference table",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/about-company/photo-3-3x4.jpg",
      alt: "Team member smiling in the office",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/about-company/photo-4-4x3.jpg",
      alt: "Person walking past a modern office lobby",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/about-company/photo-5-3x4.jpg",
      alt: "Colleagues talking in the workplace",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/about-company/photo-6-4x3.jpg",
      alt: "Looking out over a modern interior atrium",
    },
  ],
  stats: [
    {
      value: "21M",
      label: "Global Reach of Users",
      description:
        "Streamline tasks and boost efficiency by up to 80% using our tools.",
    },
    {
      value: "12+",
      label: "Years of Expertise",
      description:
        "Years building products, improving processes, and shaping thoughtful systems.",
    },
    {
      value: "654",
      label: "Projects Completed",
      description:
        "Projects delivered across diverse industries, from food and beverage to fintech.",
    },
    {
      value: "113k+",
      label: "Monthly Active Users",
    },
    {
      value: "461k",
      label: "Registered Accounts",
    },
    {
      value: "98+",
      label: "Daily Users",
    },
  ],
  logos: [
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
      alt: "Acme",
      name: "Acme",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
      alt: "Creative",
      name: "Creative",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg",
      alt: "Octan",
      name: "Octan",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-4.svg",
      alt: "Newco",
      name: "Newco",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-5.svg",
      alt: "Contoso",
      name: "Contoso",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-6.svg",
      alt: "Fabrikam",
      name: "Fabrikam",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-7.svg",
      alt: "Litware",
      name: "Litware",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-8.svg",
      alt: "Northwind",
      name: "Northwind",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-9.svg",
      alt: "Adventure Works",
      name: "Adventure Works",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-10.svg",
      alt: "Wide World",
      name: "Wide World",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-11.svg",
      alt: "Alpine",
      name: "Alpine",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-12.svg",
      alt: "Horizon",
      name: "Horizon",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
      alt: "Acme",
      name: "Acme",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
      alt: "Creative",
      name: "Creative",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg",
      alt: "Octan",
      name: "Octan",
    },
  ],
  sections: [
    {
      title: "Our Vision",
      content:
        "For years, the process of building custom software has remained challenging. Today, visual builders exist, but tailored solutions still require technical expertise and a lot of time. This is a problem for businesses and individuals alike.\n\nWhat if you could create custom software without writing a single line of code? What if you could build your own tools.\n\nWith our platform, you can! Our tools let you design layouts and create functionality—all without needing to code.\n\nWe believe that everyone should be able to build their own solutions, regardless of their technical background.",
    },
    {
      title: "Our Creators",
      content:
        "Our company has been building web tools for over a decade, focusing on efficiency and user control in every project. We know that the best solutions are the ones that you can create yourself.\n\nWe initially developed these solutions for our own team, and now everyone can benefit from them too. We are proud to offer a platform that is accessible to all, regardless of technical expertise.\n\nOur team is made up of talented individuals who are passionate about creating tools that empower users to build their own solutions with ease. We are dedicated to helping you achieve your goals.",
    },
    {
      label: "Our mission",
      title: "We make creating software easy.",
      content:
        "We aim to help empower 1,000,000 teams to create their own software. Here is how we plan on doing it.",
    },
    {
      label: "What drives us",
      title:
        "We are a team of creators, thinkers, and builders who believe in crafting experiences that truly connect. Our story is built on passion, innovation, and the drive to bring meaningful ideas to life.",
      content:
        "We start from the purpose, the people it serves, and the simplest path forward. Clarity first, then the work gets better.",
    },
  ],
  breakout: {
    src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://www.shadcnblocks.com",
  },
};

interface About3Breakout {
  src?: string;
  alt?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

const MAX_HERO_IMAGES = 2;
const MAX_STORY_IMAGES = 4;
const MAX_LOGOS = 6;
const MAX_STATS = 4;
const MAX_SECTIONS = 2;

const About3 = (props: Props) => {
  const {
    heading,
    description,
    images,
    logos,
    stats,
    statsHeading,
    statsDescription,
    sections,
    breakout,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const gallery = (images ?? []).slice(0, MAX_HERO_IMAGES);
  const companies = (logos ?? []).slice(0, MAX_LOGOS);
  const achievements = (stats ?? []).slice(0, MAX_STATS);
  const contentSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-14 sm:py-16 lg:py-24", className)}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:w-2/3">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-6xl">
            {heading}
          </h1>
          {description && (
            <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
              {description}
            </p>
          )}
        </div>

        <div className="grid items-stretch gap-4 sm:gap-6 lg:grid-cols-3">
          {gallery[0] && (
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              className="aspect-4/3 w-full rounded-xl object-cover lg:col-span-2"
            />
          )}
          <div className="flex min-h-full flex-col">
            {breakout && (
              <div className="flex h-full flex-col justify-between gap-6 rounded-xl bg-muted p-5 sm:p-7">
                {breakout.src && (
                  <img
                    src={breakout.src}
                    alt={breakout.alt}
                    className="mr-auto h-12 dark:invert"
                  />
                )}
                <div>
                  <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {breakout.description}
                  </p>
                </div>
                {breakout.buttonText && breakout.buttonUrl && (
                  <Button variant="outline" className="mr-auto" render={<a href={breakout.buttonUrl} target="_blank" />} nativeButton={false}>{breakout.buttonText}</Button>
                )}
              </div>
            )}
          </div>
        </div>

        {companies.length > 0 && (
          <div className="py-16 sm:py-20 lg:py-28">
            <Marquee>
              <MarqueeContent speed={40}>
                {companies.map((company, idx) => (
                  <MarqueeItem
                    key={company.src + idx}
                    className="mx-8 flex items-center"
                  >
                    <img
                      src={company.src}
                      alt={company.alt}
                      className="h-7 w-auto md:h-8 dark:invert"
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
            </Marquee>
          </div>
        )}

        <div className="relative isolate mt-8 overflow-hidden rounded-2xl border border-white/20 bg-[#1d71b8] p-6 text-white shadow-[0_28px_80px_rgba(12,74,130,0.32)] sm:mt-10 sm:p-8 lg:mt-12 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(135deg,black,transparent_75%)]"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
            <div className="flex flex-col gap-4 text-center md:text-left">
              {statsHeading && (
                <h2 className="max-w-xl text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                  {statsHeading}
                </h2>
              )}
              {statsDescription && (
                <p className="mx-auto max-w-lg text-sm leading-6 text-sky-50/85 sm:text-base md:mx-0">
                  {statsDescription}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
              {achievements.map((item, index) => (
                <div
                  className={cn(
                    "flex min-w-0 flex-col gap-2 border-t border-white/25 pt-4 text-center sm:pt-5 md:text-left",
                    index % 2 === 1 && "border-l border-white/20 pl-4 sm:pl-6",
                    index > 1 && "lg:border-t lg:pt-5",
                  )}
                  key={item.label}
                >
                  <span className="font-mono text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {item.value}
                  </span>
                  <p className="max-w-44 text-xs leading-5 text-sky-50/90 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {contentSections.length > 0 && (
          <div className="grid gap-6 pt-10 pb-0 md:grid-cols-12 md:gap-x-12 md:gap-y-8 md:pt-14">
            {contentSections[0] && (
              <div className="flex flex-col gap-5 md:col-span-5">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  {contentSections[0].title}
                </h2>
                <p className="text-base leading-7 whitespace-pre-line text-muted-foreground md:text-lg">
                  {contentSections[0].content}
                </p>
              </div>
            )}
            {contentSections[1] && (
              <div className="flex flex-col gap-5 md:col-span-5 md:col-start-7">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  {contentSections[1].title}
                </h2>
                <p className="text-base leading-7 whitespace-pre-line text-muted-foreground md:text-lg">
                  {contentSections[1].content}
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export { About3 };
