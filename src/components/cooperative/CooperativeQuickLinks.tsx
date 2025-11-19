import { Link } from "react-router-dom";

interface CooperativeQuickLinksProps {
  title: string;
  description: string;
  items: { id: string; title: string; description: string; to: string }[];
}

export const CooperativeQuickLinks = ({ title, description, items }: CooperativeQuickLinksProps): JSX.Element => {
  return (
    <section className="page-section py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Documentación</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1c1f35]">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-[0px_18px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0px_24px_60px_rgba(0,0,0,0.14)]"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#c01e27]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#c01e27]">
                Conoce más
                <svg
                  className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
