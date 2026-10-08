"use client";

import { useState } from "react";
import { cn } from "cn";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features: FeatureItem[];
  heading?: string;
  className?: string;
}

const Feature197 = ({
  heading = "Features",
  features = [
    {
      id: 1,
      title: "Shadcn UI Blocks",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      description:
        "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui at shadcnblocks.com. Each block is carefully crafted to be responsive, accessible, and easily customizable.",
    },
    {
      id: 2,
      title: "Tailwind CSS & TypeScript",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw15.jpeg",
      description:
        "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code.",
    },
    {
      id: 3,
      title: "Dark Mode & Customization",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw20.jpeg",
      description:
        "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration.",
    },
    {
      id: 4,
      title: "Accessibility First",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw21.jpeg",
      description:
        "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation, and semantic HTML.",
    },
  ],
  className,
}: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className={cn("py-14 sm:py-16 lg:py-24", className)}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-semibold sm:mb-10 sm:text-4xl">{heading}</h2>
        <div className="grid w-full items-stretch gap-6 md:grid-cols-2 md:gap-12">
          <div className="h-full min-h-0">
            <Accordion
              className="h-full w-full"
              defaultValue={["item-1"]}
            >
              {features.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className="flex min-h-0 flex-1 flex-col justify-center transition-opacity hover:opacity-80"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 no-underline! transition"
                  >
                    <h4
                      className={`text-xl ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <p className="text-base text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative hidden w-full self-stretch overflow-hidden rounded-xl bg-muted md:block">
            <div className="relative aspect-4/3">
              {features.map((feature) => (
                <img
                  key={feature.id}
                  src={feature.image}
                  alt={feature.title}
                  className={cn(
                    "absolute inset-0 h-full w-full rounded-md object-cover transition-opacity duration-500",
                    activeImage === feature.image ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };
