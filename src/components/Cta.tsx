import { clinic, cta, whatsappUrl } from "../data/clinic";
import { WhatsAppIcon } from "./Icons";

export default function Cta() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="rounded-[2rem] bg-forest-800 px-6 py-14 text-center text-sand-50 md:px-16 md:py-20">
          <h2 className="mx-auto max-w-[18ch] text-balance font-serif text-4xl font-semibold md:text-6xl">{cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-sand-50/80">{cta.text}</p>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary mt-8">
            <WhatsAppIcon size={22} /> {clinic.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
