import { useState } from "react";
import { mapEmbedUrl, mapOpenUrl, mapSection } from "../data/clinic";
import { PinIcon } from "./Icons";

export default function MapSection() {
  const [active, setActive] = useState(0);
  const place = mapSection.places[active];

  return (
    <section id="mapa" className="section bg-sand-100">
      <div className="container-x grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        <div>
          <h2 className="h2">{mapSection.title}</h2>
          <p className="lead mt-4">{mapSection.intro}</p>

          <div role="tablist" aria-label="Consultórios" className="mt-8 flex flex-wrap gap-3">
            {mapSection.places.map((p, i) => (
              <button
                key={p.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`${i === active ? "btn-primary" : "btn-ghost"} !py-2.5`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-3 text-base text-ink/80">
            <PinIcon size={24} className="mt-0.5 shrink-0 text-clay-500" aria-hidden="true" />
            {place.address}
          </p>
          <a
            href={mapOpenUrl(place.query)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-base font-bold text-clay-600 hover:underline"
          >
            Abrir no Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-forest-800/10 bg-sand-200">
          <iframe
            key={place.query}
            title={`Mapa do consultório em ${place.name}`}
            src={mapEmbedUrl(place.query)}
            className="block h-[360px] w-full md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
