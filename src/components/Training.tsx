import { training, type TimelineItem } from "../data/clinic";
import { PlusIcon } from "./Icons";

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="font-serif text-2xl font-semibold text-forest-800">{title}</h3>
      <ul className="mt-5 space-y-5 border-l border-clay-400/50 pl-6">
        {items.map((i) => (
          <li key={i.title + (i.years ?? "")} className="relative leading-relaxed">
            <span className="absolute -left-[1.78rem] top-2.5 h-2 w-2 rounded-full bg-clay-500" aria-hidden="true" />
            {i.years && <p className="text-sm font-bold uppercase tracking-wide text-clay-600">{i.years}</p>}
            <p className="text-base font-bold text-forest-800">{i.title}</p>
            {i.where && <p className="text-base text-ink/75">{i.where}</p>}
            {i.note && <p className="text-base text-ink/75">{i.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Training() {
  return (
    <section id="formacao" className="section">
      <div className="container-x">
        <h2 className="h2">{training.title}</h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <Timeline title={training.educationTitle} items={training.education} />
          <Timeline title={training.careerTitle} items={training.career} />
        </div>

        <details className="group mt-12 border-y border-forest-800/15 py-5">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-semibold text-forest-800 [&::-webkit-details-marker]:hidden">
            {training.moreTitle}
            <PlusIcon
              size={22}
              className="shrink-0 text-clay-500 transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </summary>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {training.previous.map((p) => (
                <li key={p.title + p.where} className="text-base leading-relaxed">
                  <span className="font-bold text-forest-800">{p.title}</span>
                  <span className="text-ink/75">
                    , {p.where}
                    {p.years ? ` (${p.years})` : ""}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="list-disc space-y-3 pl-5 marker:text-clay-500">
              {training.other.map((o) => (
                <li key={o} className="text-base leading-relaxed text-ink/80">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </section>
  );
}
