import { Link } from "react-router-dom";

import { cooperativeDetailPages } from "../../data/cooperativePages";

interface CooperativeAsideLinksProps {
  currentId: string;
}

export const CooperativeAsideLinks = ({ currentId }: CooperativeAsideLinksProps): JSX.Element => {
  return (
    <aside className="sticky top-28 space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-[0px_18px_45px_rgba(0,0,0,0.12)]">
        <header className="border-b border-slate-200 bg-[#c01e27] px-6 py-4">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-white">Otras secciones</h2>
        </header>
        <ul className="divide-y divide-slate-200">
          {cooperativeDetailPages.map((page) => {
            const isActive = page.id === currentId;
            return (
              <li key={page.id} className={isActive ? "bg-[#fef3f4]" : "bg-white transition hover:bg-slate-50"}>
                <Link to={`/nuestra-cooperativa/${page.id}`} className="block px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c01e27]">{page.title}</p>
                  {page.subtitle && (
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{page.subtitle}</p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
