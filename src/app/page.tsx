import { About3 } from "@/components/about3";
import { Cta34 } from "@/components/cta34";
import { Feature3 } from "@/components/feature3";
import { Feature197 } from "@/components/feature197";
import { Footer1 } from "@/components/footer1";
import { Hero195 } from "@/components/hero195";
import { Hero206 } from "@/components/hero206";
import { Navbar35 } from "@/components/navbar35";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar35
        className="pt-4"
        logo={{
          url: "#",
          src: "/logo.png",
          alt: "DevHubs Afrique",
          title: "",
          className: "max-h-8",
        }}
        menu={[
          { title: "Accueil", url: "#" },
          { title: "À propos", url: "#about" },
          {
            title: "Piliers",
            url: "#features",
            items: [
              { title: "Troc de compétences", description: "Échanges locaux entre devs", url: "#troc" },
              { title: "Open source", description: "Projets panafricains", url: "#features" },
              { title: "Marketplace", description: "Micro-services & mobile money", url: "#marketplace" },
            ],
          },
          { title: "Projets", url: "#features" },
          { title: "Communauté", url: "#join" },
        ]}
        auth={{
          login: { title: "Connexion", url: "/auth" },
          signup: { title: "Rejoindre", url: "/auth" },
        }}
      />

      <Hero206
        className="pt-4"
        heading="La plateforme qui connecte les devs africains."
        description="Échangez du savoir, mettez en valeur vos projets open source et monétisez vos services techniques dans un écosystème pensé pour la croissance du continent."
        mockupUrl="https://devhubs.afrique"
        logos={[
          { src: "/systalink-logo.0_zi0lgg3m9x0.svg", alt: "Systalink", className: "h-10 w-auto opacity-100" },
          { src: "/logo.0v33w85u2spic.svg", alt: "DevHubs Afrique", className: "h-10 w-auto opacity-100" },
          { src: "/logo.png", alt: "DevHubs Afrique", className: "h-9 w-auto opacity-100" },
          { src: "/deco-calque-1.0oa7rt9g8fy89.webp", alt: "Systalink", className: "h-7 w-auto opacity-100" },
        ]}
        images={[
          {
            src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9.png",
            alt: "Aperçu de la plateforme DevHubs Afrique",
          },
        ]}
      />

      <Hero195
        heading="Un hub technique africain, conçu pour créer, collaborer et vendre."
        description="Des services d’entraide, des solutions open source locales et de la monétisation facile grâce à des paiements mobiles intégrés."
        buttons={{
          primary: { text: "Rejoindre la communauté", url: "#join" },
          secondary: { text: "Découvrir les projets", url: "#features" },
        }}
        tabs={[
          {
            title: "Troc",
            image: {
              src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9.png",
              srcDark: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
              alt: "Échange de compétences entre développeurs",
            },
          },
          {
            title: "Open source",
            image: {
              src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9.png",
              srcDark: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9-dark.png",
              alt: "Vitrine des projets open source panafricains",
            },
          },
          {
            title: "Marketplace",
            image: {
              src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-3-16x9.png",
              srcDark: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-3-16x9-dark.png",
              alt: "Marketplace de micro-services africains",
            },
          },
          {
            title: "Réputation",
            image: {
              src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-4-16x9.png",
              srcDark: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-4-16x9-dark.png",
              alt: "Profil et réputation des développeurs",
            },
          },
          {
            title: "Paiements",
            image: {
              src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-5-16x9.png",
              srcDark: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-hero/saas-hero-5-16x9-dark.png",
              alt: "Paiements mobile inclusifs",
            },
          },
        ]}
      />

      <About3
        heading="La communauté qui fait grandir les devs d’Afrique."
        description="DevHubs Afrique réunit les talents, les projets et les opportunités dans un seul écosystème. Nous aidons les développeurs à collaborer, à résoudre des problèmes locaux et à transformer leur expertise en impact réel."
        statsHeading="Des chiffres qui donnent du sens à l’écosystème."
        statsDescription="Un hub conçu pour rendre le développement plus accessible, plus collaboratif et plus rentable dans les réalités africaines."
        logos={[]}
        stats={[
          { value: "54+", label: "pays interconnectés" },
          { value: "0F", label: "frais bancaires via Mobile Money" },
          { value: "100%", label: "open source & collaboratif" },
          { value: "24/7", label: "échanges de compétences" },
        ]}
        images={[
          {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            alt: "Équipe de développeurs engagés",
          },
          {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
            alt: "Collaboration technique",
          },
          {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
            alt: "Atelier de travail technique",
          },
          {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            alt: "Communauté technique Africaine",
          },
        ]}
        sections={[
          {
            title: "Notre vision",
            content:
              "Nous voulons unifier l’écosystème tech africain autour d’une logique de partage, de confiance et d’impact local. Les devs doivent pouvoir apprendre, collaborer et monétiser sans barrières géographiques ni financières.",
          },
          {
            title: "Notre mission",
            content:
              "Créer une plateforme qui permet à chacun de mettre ses compétences au service de la communauté, de valoriser ses projets et de développer des solutions qui répondent aux vrais besoins du continent.",
          },
        ]}
        breakout={{
          src: "/logo.png",
          alt: "DevHubs Afrique",
          title: "Le hub des talents africains",
          description: "Un espace pour construire, échanger et faire grandir les solutions locales.",
          buttonText: "Rejoindre la communauté",
          buttonUrl: "#join",
        }}
      />

      <Feature3
        heading="Les piliers qui font la différence."
        features={[
          {
            icon: <div className="rounded-full bg-indigo-500/15 p-2 text-indigo-300">↔</div>,
            title: "Troc de compétences",
            description: "Échangez des services, des revues de code, de l’architecture ou du mentorat sans dépendre de budgets classiques.",
            image: { src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-1-4x3.svg", alt: "Troc de compétences" },
          },
          {
            icon: <div className="rounded-full bg-emerald-500/15 p-2 text-emerald-300">◎</div>,
            title: "Open source local",
            description: "Mettez en valeur des solutions africaines, contribuez à des projets utiles et développez des outils adaptés au continent.",
            image: { src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-2-4x3.svg", alt: "Open source local" },
          },
          {
            icon: <div className="rounded-full bg-amber-500/15 p-2 text-amber-300">$</div>,
            title: "Marketplace de services",
            description: "Monétisez vos compétences avec des micro-services et des paiements mobiles conçus pour les réalités locales.",
            image: { src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-3-4x3.svg", alt: "Marketplace de services" },
          },
          {
            icon: <div className="rounded-full bg-cyan-500/15 p-2 text-cyan-300">★</div>,
            title: "Réputation réelle",
            description: "Construisez une présence technique crédible avec des profils vérifiés, des contributions visibles et de la confiance.",
            image: { src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-4-4x3.svg", alt: "Réputation réelle" },
          },
          {
            icon: <div className="rounded-full bg-violet-500/15 p-2 text-violet-300">⬢</div>,
            title: "Collaboration distribuée",
            description: "Travaillez avec d’autres talents africains, même à distance, sans barrières d’accès ni friction administrative.",
            image: { src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-5-4x3.svg", alt: "Collaboration distribuée" },
          },
          {
            icon: <div className="rounded-full bg-rose-500/15 p-2 text-rose-300">⚡</div>,
            title: "Impact local",
            description: "Créez des produits et services utiles pour les marchés africains, avec des besoins réels et des solutions concrètes.",
            image: { src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-card-detail-6-4x3.svg", alt: "Impact local" },
          },
        ]}
      />

      <Feature197
        heading="Un hub pour faire avancer vos projets."
        features={[
          {
            id: 1,
            title: "Des projets ouverts à tous",
            description:
              "Rejoignez des initiatives open source utiles et contribuez avec vos compétences, où que vous soyez.",
            image:
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
          },
          {
            id: 2,
            title: "Un réseau de talents",
            description:
              "Trouvez des développeurs, partagez votre expertise et faites avancer vos idées avec la communauté.",
            image:
              "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
          },
          {
            id: 3,
            title: "Des services valorisés",
            description:
              "Présentez vos services, trouvez des opportunités et développez votre activité au sein du hub.",
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
          },
          {
            id: 4,
            title: "Une réputation qui se construit",
            description:
              "Rendez vos contributions visibles et développez la confiance autour de votre expertise.",
            image:
              "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=85",
          },
        ]}
      />

      <Cta34
        heading="Rejoignez DevHubs Afrique dès aujourd’hui."
        description="Créez votre profil, connectez-vous avec d’autres devs africains et donnez vie à des projets utiles pour le continent."
        buttons={{
          primary: { text: "Rejoindre la communauté", url: "/auth" },
          secondary: { text: "Voir les projets", url: "#features" },
        }}
      />

      <Footer1 />
    </main>
  );
}
