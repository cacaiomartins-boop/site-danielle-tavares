import { clinic, locations, whatsappUrl } from "../data/clinic";
import { PinIcon, VideoIcon, WhatsAppIcon } from "./Icons";

export default function Locations() {
  return (
    <section id="atendimento" className="section bg-sand-100">
      <div className="container-x">
        <h2 className="h2">{locations.title}</h2>
        <p className="lead mt-4">{locations.intro}</p>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <img
            src={clinic.images.leblon}
            alt="Fachada do prédio do consultório no Leblon, Rio de Janeiro"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
            loading="lazy"
            width={1280}
            height={688}
          />

          <div>
            <ul className="divide-y divide-forest-800/10 border-y border-forest-800/10">
              {locations.items.map((l) => (
                <li key={l.name} className="flex gap-4 py-5">
                  {l.map ? (
                    <PinIcon size={26} className="mt-1 shrink-0 text-clay-500" aria-hidden="true" />
                  ) : (
                    <VideoIcon size={26} className="mt-1 shrink-0 text-clay-500" aria-hidden="true" />
                  )}
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-forest-800">{l.name}</h3>
                    <p className="text-base text-ink/80">{l.address}</p>
                    <p className="text-base text-ink/60">{l.detail}</p>
                    {l.map && (
                      <a
                        href={l.map}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-base font-bold text-clay-600 hover:underline"
                      >
                        Ver no mapa
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base text-ink/75">
              {clinic.showPrice && (
                <>
                  Sessão de psicoterapia: <strong className="font-bold text-forest-800">{clinic.price}</strong>.{" "}
                </>
              )}
              {locations.payment}
            </p>

            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              <WhatsAppIcon size={22} /> {clinic.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
