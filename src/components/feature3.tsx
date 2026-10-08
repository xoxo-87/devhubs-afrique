import {
  BriefcaseIcon,
  ExchangeIcon,
  FolderOpenIcon,
  SparklesIcon,
  UsersIcon,
  WalletIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "cn";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface FeatureCardListItem {
  title: string;
  description: string;
  image: Image;
  href?: string;
  icon?: React.ReactNode;
  label?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface FeatureCardListProps {
  heading: string;
  features?: FeatureCardListItem[];
  className?: string;
}

interface Feature3Props extends FeatureCardListProps {}
type Props = Partial<Feature3Props>;

const defaultProps: Feature3Props = {
  heading: "Build faster with production ready features",
  features: [
    {
      icon: <HugeiconsIcon icon={ExchangeIcon} size={22} color="currentColor" strokeWidth={1.7} />,
      title: "Troc de compétences",
      description:
        "Échangez savoirs, revues, mentorat et services sans dépendre d’un budget classique ou d’un réseau bloqué.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-1-4x3.svg",
        alt: "Troc de compétences",
      },
      href: "#troc",
    },
    {
      icon: <HugeiconsIcon icon={FolderOpenIcon} size={22} color="currentColor" strokeWidth={1.7} />,
      title: "Open source local",
      description:
        "Mettez en valeur des projets utiles pour l’Afrique, avec une logique de partage and d’impact durable.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-2-4x3.svg",
        alt: "Open source local",
      },
      href: "#features",
    },
    {
      icon: <HugeiconsIcon icon={WalletIcon} size={22} color="currentColor" strokeWidth={1.7} />,
      title: "Marketplace de services",
      description:
        "Monétisez vos services avec des paiements souvent compatibles avec les réalités mobiles du continent.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-3-4x3.svg",
        alt: "Marketplace de services",
      },
      href: "#marketplace",
    },
    {
      icon: <HugeiconsIcon icon={BriefcaseIcon} size={22} color="currentColor" strokeWidth={1.7} />,
      title: "Réputation réelle",
      description:
        "Construisez une présence crédible avec des profils visibles, des contributions réelles et de la confiance.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-4-4x3.svg",
        alt: "Réputation réelle",
      },
      href: "#join",
    },
    {
      icon: <HugeiconsIcon icon={UsersIcon} size={22} color="currentColor" strokeWidth={1.7} />,
      title: "Collaboration distribuée",
      description:
        "Travaillez à distance avec des talents de toute l’Afrique sans friction administrative ni barrières d’accès.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-5-4x3.svg",
        alt: "Collaboration distribuée",
      },
      href: "#community",
    },
    {
      icon: <HugeiconsIcon icon={SparklesIcon} size={22} color="currentColor" strokeWidth={1.7} />,
      title: "Impact local",
      description:
        "Créez des solutions utiles pour les marchés africains, avec un impact concret sur les communautés.",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-6-4x3.svg",
        alt: "Impact local",
      },
      href: "#join",
    },
  ],
};

const Feature3 = (props: Props) => {
  const { heading, features, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-14 sm:py-16 lg:py-24", className)}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:mb-14 lg:text-5xl">
            {heading}
          </h2>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features?.slice(0, 6).map((feature, index) => (
              <Card key={index} className="overflow-hidden border-white/10 bg-slate-900/60 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                <CardHeader className="pb-3">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-left">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-snug text-sm text-muted-foreground sm:text-base">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter className="p-0">
                  <img
                    className="aspect-4/3 w-full border-t border-white/10 object-cover object-top"
                    src={feature.image.src}
                    alt={feature.image.alt}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature3 };
