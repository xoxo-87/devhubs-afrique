import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_30%),linear-gradient(180deg,#0b1120_0%,#111827_100%)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8">
        <div className="flex w-full items-center justify-start">
          <img src="/logo.png" alt="DevHubs Afrique" className="h-12 w-auto md:h-16" />
        </div>

        <div className="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-16">
          <div className="flex w-full min-w-0 flex-col items-stretch gap-6 text-left md:w-[45%] lg:w-[48%]">
            <div className="mx-auto flex w-full max-w-lg flex-col gap-4 sm:gap-5 md:mx-0">
              <Button type="button" className="h-14 w-full rounded-xl bg-white text-base text-slate-900 hover:bg-slate-100">
                <img src="/GitHub.svg" alt="GitHub" className="h-5 w-5" />
                Continuer avec GitHub
              </Button>
              <Button type="button" variant="outline" className="h-14 w-full rounded-xl border-white/10 bg-white/5 text-base text-white hover:bg-white/10">
                <FcGoogle className="text-lg" />
                Continuer avec Google
              </Button>
              <span className="h-px w-full bg-white/10" />
              <form autoComplete="off" className="flex w-full flex-col gap-3">
                <Input
                  placeholder="Entrez votre adresse e-mail"
                  required
                  className="h-14 w-full rounded-xl border-white/10 bg-white/5 px-4 text-base text-white placeholder:text-slate-400"
                />
                <Button type="submit" className="h-14 w-full rounded-xl bg-indigo-500 text-base hover:bg-indigo-400">
                  Continuer
                </Button>
              </form>
            </div>
            <p className="mx-auto w-full max-w-lg text-xs leading-5 text-slate-300 md:mx-0">
              En entrant votre email, vous acceptez de recevoir des mises à jour et des informations utiles sur la communauté DevHubs Afrique. Vous pouvez vous désabonner à tout moment.
              <a href="#" className="ml-1 font-medium text-indigo-300 underline underline-offset-2">
                politique de confidentialité
              </a>
              .
            </p>
          </div>

          <div className="hidden w-full flex-col justify-center gap-5 text-center md:flex md:w-[55%] md:text-left lg:w-[52%]">
            <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Bienvenue dans la communauté DevHubs Afrique
            </h3>
            <div className="space-y-4 text-sm font-medium leading-6 text-slate-300 md:text-base">
              <p>
                Rejoignez les devs qui partagent leurs compétences, publient leurs projets et construisent ensemble des solutions utiles pour le continent.
              </p>
              <p>
                Créez votre profil, connectez-vous à des projets concrets et développez votre réputation au sein d’un réseau technologique africain.
              </p>
              <p>L’avenir tech de l’Afrique se construit en communauté.</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-4 text-xs text-slate-300 md:justify-between md:text-sm">
          <p>© 2026 DevHubs Afrique</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="underline underline-offset-2 decoration-slate-500 hover:text-white">
              Confidentialité
            </a>
            <a href="#" className="underline underline-offset-2 decoration-slate-500 hover:text-white">
              Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
