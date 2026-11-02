import { trust } from "../data/clinic";
import { StarIcon } from "./Icons";

export default function Trust() {
  return (
    <section aria-label="Resumo" className="border-y border-forest-800/10 bg-sand-100">
      <dl className="container-x grid divide-y divide-forest-800/10 md:grid-cols-3 md:divide-x md:divide-y-0">
        {trust.map((t) => {
          const body = (
            <>
              <dt className="flex items-center gap-2 font-serif text-4xl font-semibold text-clay-500">
                {t.href && <StarIcon size={26} weight="fill" aria-hidden="true" />}
                {t.value}
              </dt>
              <dd className="mt-1 text-base text-ink/70">{t.label}</dd>
            </>
          );
          return t.href ? (
            <a
              key={t.value}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="block py-7 transition-colors duration-150 hover:bg-sand-200/60 md:px-8 md:first:pl-0"
            >
              {body}
            </a>
          ) : (
            <div key={t.value} className="py-7 md:px-8">
              {body}
            </div>
          );
        })}
      </dl>
    </section>
  );
}
