import { training } from "../data/clinic";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-2xl font-semibold text-forest-800">{title}</h3>
      <ul className="mt-5 space-y-4 border-l border-clay-400/50 pl-6">
        {items.map((i) => (
          <li key={i} className="relative text-base leading-relaxed text-ink/80">
            <span className="absolute -left-[1.78rem] top-2.5 h-2 w-2 rounded-full bg-clay-500" aria-hidden="true" />
            {i}
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
          <List title="Formação" items={training.education} />
          <List title="Atuação" items={training.career} />
        </div>
      </div>
    </section>
  );
}
