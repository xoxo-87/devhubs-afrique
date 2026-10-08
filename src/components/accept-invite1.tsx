import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Hyperlink {
  label: string;
  href: string;
}

interface AcceptInvite1Props {
  companyLogo?: string;
  disclaimer?: string;
  disclaimerLink?: Hyperlink;
  heading?: string;
  description?: string[];
  copyright?: string;
  footerLinks?: Hyperlink[];
}

const AcceptInvite1 = ({
  companyLogo = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.svg",
  disclaimer = "By entering your email, you agree to receive updates and marketing messages from Acme You can unsubscribe at any time. For more details, please review our ",
  disclaimerLink = {
    label: "privacy policy",
    href: "#",
  },
  heading = "Welcome to Acme",
  description = [
    "Acme is a next-generation platform designed to streamline your workflow. Built with flexibility in mind, it adapts to your unique business needs.",
    "Manage your projects, collaborate with your team, and track progress all in one centralized dashboard.",
    "Get started today.",
  ],
  copyright = "© 2026 Acme",
  footerLinks = [
    { label: "Privacy Policy", href: "#" },
    {
      label: "Support",
      href: "#",
    },
  ],
}: AcceptInvite1Props) => {
  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 px-5 py-6 shadow-[0_30px_90px_rgba(15,23,42,0.65)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
          <div className="relative flex flex-col gap-8">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_40px_rgba(99,102,241,0.18)]">
                <img
                  src={companyLogo}
                  alt="company logo"
                  className="h-20 w-auto object-contain md:h-28"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-stretch lg:gap-14">
              <div className="flex w-full flex-col gap-6 md:w-[45%] lg:w-[48%]">
                <div className="flex flex-col gap-6">
                  <Button type="button" variant="outline" className="h-12 rounded-xl text-sm font-medium">
                    <FcGoogle className="text-lg" />
                    Sign in with Google
                  </Button>
                  <span className="h-px w-full bg-border" />
                  <form autoComplete="off" className="flex flex-col gap-3">
                    <Input placeholder="Enter your email address" required className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-400" />
                    <Button type="submit" className="h-12 rounded-xl">Continue</Button>
                  </form>
                </div>
                <p className="text-xs leading-5 text-slate-300">
                  {disclaimer}
                  <a href={disclaimerLink.href} className="font-medium text-indigo-300 underline underline-offset-2">
                    {disclaimerLink.label}
                  </a>
                  .
                </p>
              </div>

              <div className="flex w-full flex-col justify-center gap-5 md:w-[55%] lg:w-[52%]">
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {heading}
                </h3>
                <div className="space-y-4 text-sm font-medium leading-6 text-slate-300 md:text-base">
                  {description.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 md:justify-between md:text-sm">
          <p>{copyright}</p>
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="underline underline-offset-2 decoration-slate-500 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AcceptInvite1 };
