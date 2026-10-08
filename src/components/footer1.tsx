import { cn } from "cn";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface NewsletterData {
  title?: string;
  description?: string;
}

interface Footer1Props {
  className?: string;
  brand?: {
    name: string;
    description: string;
    logo: string;
    href: string;
  };
  newsletter?: NewsletterData;
  columns?: FooterColumn[];
  legal?: FooterLink[];
  copyright?: string;
}

const Footer1 = ({
  className,
  brand = {
    name: "DevHubs Afrique",
    description: "La plateforme d’échange panafricaine, par les devs, pour les devs.",
    logo: "/logo.png",
    href: "#",
  },
  newsletter = {
    title: "Newsletter",
    description:
      "Recevez les nouveautés, les opportunités et les projets inspirants de la communauté DevHubs Afrique.",
  },
  columns = [
    {
      title: "Plateforme",
      links: [
        { label: "Troc de compétences", href: "#troc" },
        { label: "Open source", href: "#features" },
        { label: "Marketplace", href: "#marketplace" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Communauté", href: "#join" },
        { label: "Projets", href: "#features" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#about" },
        { label: "Contact", href: "#join" },
        { label: "Mentions légales", href: "#" },
      ],
    },
  ],
  legal = [
    { label: "Conditions d'utilisation", href: "#terms" },
    { label: "Politique de confidentialité", href: "#privacy" },
    { label: "Mentions légales", href: "#legal" },
    { label: "Politique relative aux Cookies", href: "#cookies" },
    { label: "Gérer mes cookies", href: "#cookie-settings" },
  ],
  copyright = "© 2026 DevHubs Afrique. Tous droits réservés.",
}: Footer1Props) => {
  return (
    <footer className={cn("relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-200", className)}>
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-indigo-500/10 via-slate-950/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="@container mb-12 w-full text-center">
          <a href={brand.href} className="inline-block align-middle">
            <span
              aria-label={brand.name}
              className="inline-flex items-end justify-center whitespace-nowrap leading-none tracking-[-0.09em] text-slate-500/25 select-none"
              style={{
                fontSize: "clamp(3rem, 18cqw, 18rem)",
                lineHeight: 1.05,
                paddingTop: "0.08em",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.8) 36%, rgba(0,0,0,0.24) 64%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.8) 36%, rgba(0,0,0,0.24) 64%, rgba(0,0,0,0) 100%)",
              }}
            >
              <span className="px-[0.06em] font-black text-slate-200">{'{'}</span>
              <span className="font-black text-slate-200">Dev</span>
              <span className="ml-[0.14em] font-medium text-slate-400">Hubs</span>
              <span className="px-[0.06em] font-black text-slate-200">{'}'}</span>
            </span>
          </a>
        </div>

        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-medium leading-none text-white">
                {newsletter.title}
              </h3>
              <p className="text-sm leading-6 text-slate-300">{newsletter.description}</p>
            </div>
            <form className="flex w-full flex-col gap-3 sm:flex-row">
              <input
                type="email"
                aria-label="Adresse e-mail"
                placeholder="Votre adresse e-mail"
                className="h-16 min-h-16 flex-1 rounded-md border border-white/10 bg-white/5 px-4 text-base text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none sm:h-12 sm:min-h-12 sm:px-3 sm:text-sm"
              />
              <button
                type="submit"
                className="h-11 rounded-md bg-white px-5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
              >
                Rejoindre
              </button>
            </form>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-bold uppercase text-slate-600">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="underline-offset-4 transition hover:text-white hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <div className="flex items-center justify-center">
              <a href={brand.href} className="inline-flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="h-8 w-auto object-contain opacity-90" />
              </a>
            </div>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center transition hover:opacity-80">
              <img src="/réseau/X.png" alt="X" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" className="inline-flex items-center justify-center transition hover:opacity-80">
              <img src="/réseau/LinkedIn_Symbol_1.png" alt="LinkedIn" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" className="inline-flex items-center justify-center transition hover:opacity-80">
              <img src="/réseau/Instagram.png" alt="Instagram" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" className="inline-flex items-center justify-center transition hover:opacity-80">
              <img src="/réseau/facebook.png" alt="Facebook" className="h-5 w-5 object-contain" />
            </a>
          </div>

          <div className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs text-slate-300 sm:text-sm">
            {legal.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <label className="sr-only" htmlFor="footer-language">Langue</label>
          <select
            id="footer-language"
            defaultValue="fr"
            className="h-10 rounded-md border border-white/10 bg-slate-900 px-3 text-sm text-slate-200 focus:border-indigo-400 focus:outline-none"
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
          </select>

          <p className="text-sm text-slate-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer1 };
