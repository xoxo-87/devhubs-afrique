import { ArrowRight } from "lucide-react";
import { cn } from "cn";

interface Stats8Props {
  className?: string;
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats8 = ({
  heading = "La preuve que l’Afrique tech est prête.",
  description = "Une infrastructure pensée pour connecter les talents, les projets et les marchés du continent.",
  link = {
    text: "Découvrir la vision",
    url: "#join",
  },
  stats = [
    {
      id: "stat-1",
      value: "54+",
      label: "pays interconnectés",
    },
    {
      id: "stat-2",
      value: "0F",
      label: "de frais bancaires via Mobile Money",
    },
    {
      id: "stat-3",
      value: "100%",
      label: "open source & transparent",
    },
    {
      id: "stat-4",
      value: "24/7",
      label: "collaboration entre devs africains",
    },
  ],
  className,
}: Stats8Props) => {
  return (
    <section className={cn("relative overflow-hidden py-16 sm:py-20 md:py-28", className)}>
      <div className="absolute left-1/2 bottom-0 h-[28rem] w-[28rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.32)_0%,_rgba(99,102,241,0.18)_28%,_rgba(15,23,42,0.04)_52%,_transparent_70%)] blur-3xl" />
      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg">
            {description}
          </p>
          <a
            href={link.url}
            className="inline-flex items-center justify-center gap-2 font-semibold text-indigo-300 transition hover:text-white md:justify-start"
          >
            {link.text}
            <ArrowRight className="h-auto w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-indigo-400/40 sm:p-6",
                index % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1",
                "rotate-0",
              )}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.10),transparent_50%,rgba(15,118,110,0.04))]" />
              <div className="relative flex h-full flex-col gap-3">
                <div className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                  {stat.value}
                </div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-300/90 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats8 };
