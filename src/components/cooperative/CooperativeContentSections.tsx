import type { CooperativeSection } from "../../data/cooperativePages";
import { CooperativeDocumentList } from "./CooperativeDocumentList";

interface CooperativeContentSectionsProps {
  sections: CooperativeSection[];
}

export const CooperativeContentSections = ({ sections }: CooperativeContentSectionsProps): JSX.Element => {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0px_24px_60px_rgba(0,0,0,0.08)]">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#1c1f35]">{section.heading}</h2>
            {section.description && <p className="text-sm leading-relaxed text-slate-600">{section.description}</p>}
          </header>

          {section.video && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="aspect-video">
                <iframe
                  src={section.video.src}
                  title={section.video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {section.paragraphs && (
            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>
          )}

          {section.bullets && (
            <ul className="space-y-3 text-sm text-slate-600">
              {section.bullets.map((bullet) => (
                <li key={`${section.id}-bullet-${bullet}`} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#c01e27]" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.documents && <CooperativeDocumentList documents={section.documents} />}
        </section>
      ))}
    </div>
  );
};
