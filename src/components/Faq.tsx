import { faq } from "../data/clinic";
import { PlusIcon } from "./Icons";

export default function Faq() {
  return (
    <section id="duvidas" className="section bg-sand-100">
      <div className="container-x">
        <h2 className="h2">{faq.title}</h2>

        <div className="mt-10 max-w-3xl divide-y divide-forest-800/15 border-y border-forest-800/15">
          {faq.items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-semibold text-forest-800 [&::-webkit-details-marker]:hidden">
                {f.q}
                <PlusIcon
                  size={22}
                  className="shrink-0 text-clay-500 transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
