import { topics } from "../data/clinic";
import { CheckIcon } from "./Icons";

export default function Topics() {
  return (
    <section className="section">
      <div className="container-x">
        <h2 className="h2">{topics.title}</h2>
        <p className="lead mt-4">{topics.intro}</p>

        <ul className="mt-10 grid gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.items.map((t) => (
            <li key={t} className="flex gap-3 text-lg text-forest-800">
              <CheckIcon size={22} className="mt-1 shrink-0 text-clay-500" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[62ch] rounded-2xl bg-sand-100 p-5 text-base leading-relaxed text-ink/75">
          {topics.note}
        </p>
      </div>
    </section>
  );
}
