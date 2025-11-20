import { ContactQuickCard } from "../../data/contactInfo";
import type { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";
import { FaClock, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

const Icon = ({ name }: { name: ContactQuickCard["icon"] }) => {
  const className = "h-6 w-6";

  let IconComponent: ComponentType<IconBaseProps>;

  switch (name) {
    case "phone":
      IconComponent = FaPhone as ComponentType<IconBaseProps>;
      break;
    case "whatsapp":
      IconComponent = FaWhatsapp as ComponentType<IconBaseProps>;
      break;
    case "mail":
      IconComponent = FaEnvelope as ComponentType<IconBaseProps>;
      break;
    case "clock":
    default:
      IconComponent = FaClock as ComponentType<IconBaseProps>;
      break;
  }

  return <IconComponent className={className} />;
};

interface ContactQuickCardsProps {
  cards: ContactQuickCard[];
}

export const ContactQuickCards = ({ cards }: ContactQuickCardsProps): JSX.Element => {
  return (
    <section className="page-section py-12" aria-labelledby="contact-quick-cards-heading">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]" id="contact-quick-cards-heading">
            Atención inmediata
          </p>
          <h2 className="text-3xl font-semibold text-[#1c1f35]">Contáctanos por el canal que prefieras</h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600">
            Nuestros asesores están disponibles para acompañarte en reservas, envíos y soporte corporativo. Elige el canal que se adapte mejor a tus necesidades.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-[0px_18px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0px_24px_60px_rgba(0,0,0,0.14)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fef3f4] text-[#c01e27]">
                  <Icon name={card.icon} />
                </span>
                <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-[#c01e27]">{card.title}</h3>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>

              <a
                href={card.action.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c01e27] transition group-hover:translate-x-1"
              >
                {card.action.label}
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
