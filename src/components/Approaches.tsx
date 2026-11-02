import { approaches } from "../data/clinic";

export default function Approaches() {
  return (
    <section id="abordagem" className="section bg-forest-800 text-sand-50">
      <div className="container-x">
        <h2 className="h2 !text-sand-50">{approaches.title}</h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-sand-50/75">{approaches.intro}</p>

        <dl className="mt-10 divide-y divide-sand-50/15 border-y border-sand-50/15">
          {approaches.items.map((a) => (
            <div key={a.title} className="grid gap-1 py-6 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
              <dt className="font-serif text-2xl font-semibold">{a.title}</dt>
              <dd className="max-w-[60ch] text-lg text-sand-50/75">{a.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
