import { ContactQuickCard } from "../../data/contactInfo";

const Icon = ({ name }: { name: ContactQuickCard["icon"] }): JSX.Element => {
  const commonProps = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M6.4 2.4l3.2 1.6a2 2 0 01.9 2.7l-.7 1.5a1 1 0 00.2 1.1l4 4a1 1 0 001.1.2l1.5-.7a2 2 0 012.7.9l1.6 3.2a1 1 0 01-.5 1.4 14.5 14.5 0 01-6.4 1.5C8.6 20.8 3.2 15.4 3.2 8.8a14.5 14.5 0 011.5-6.4 1 1 0 011.4-.4z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...commonProps}>
          <path d="M21 12a9 9 0 10-16.2 5.4L4 21l3.7-.7A9 9 0 0021 12z" />
          <path d="M8.8 8.8c0 3.1 2.5 5.6 5.6 5.6a1.5 1.5 0 001.4-1c.1-.4.2-.7-.1-1l-.7-1.2a.9.9 0 00-.8-.4h-.6a.5.5 0 01-.4-.2l-.6-.6a.5.5 0 010-.7l.3-.3a.5.5 0 000-.7l-1-1a.9.9 0 00-1.2 0l-.9.9a1.5 1.5 0 00-.4 1.1z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "clock":
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
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
