import { about } from "../data/clinic";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container-x">
        <h2 className="h2">{about.title}</h2>
        <div className="mt-6 max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink/80">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
