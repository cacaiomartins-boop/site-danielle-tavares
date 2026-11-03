import { clinic } from "../data/clinic";

export default function Footer() {
  return (
    <footer className="border-t border-forest-800/10 py-10">
      <div className="container-x flex flex-col gap-4 text-base text-ink/65 md:flex-row md:items-start md:justify-between">
        <p>
          <strong className="font-serif text-lg font-semibold text-forest-800">{clinic.name}</strong>
          <br />
          {clinic.title} · {clinic.crp}
        </p>
        <p>
          Leblon · Copacabana · Online
          <br />
          WhatsApp {clinic.whatsappLabel}
          <br />
          <a href={`mailto:${clinic.email}`} className="underline underline-offset-4 hover:text-clay-600">
            {clinic.email}
          </a>
        </p>
        <p>© {new Date().getFullYear()} {clinic.name}</p>
      </div>
    </footer>
  );
}
