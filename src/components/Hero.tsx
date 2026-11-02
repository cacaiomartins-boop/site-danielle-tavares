import { clinic, hero, whatsappUrl } from "../data/clinic";
import { WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="topo" className="flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden">
      <div className="container-x grid items-center gap-10 py-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:py-12">
        <div>
          <h1 className="text-balance font-serif text-[2.6rem] font-semibold leading-[1.05] text-forest-800 md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink/75 md:text-xl">{hero.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary">
              <WhatsAppIcon size={22} /> {clinic.cta}
            </a>
            <a href="#sobre" className="btn-ghost">
              {hero.secondary}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            className="absolute -right-3 top-4 h-full w-full rounded-[2.5rem] border border-clay-400/60"
            aria-hidden="true"
          />
          <img
            src={clinic.images.portrait}
            alt={`${clinic.name}, ${clinic.title.toLowerCase()}`}
            className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-xl"
            width={672}
            height={672}
          />
        </div>
      </div>
    </section>
  );
}
