import type { CooperativeSection } from "../../data/cooperativePages";
import { CooperativeDocumentList } from "./CooperativeDocumentList";

interface CooperativeContentSectionsProps {
  sections: CooperativeSection[];
}

export const CooperativeContentSections = ({ sections }: CooperativeContentSectionsProps): JSX.Element => {
  return (
    <div className="space-y-8">
      {sections.map((section) => {
        return (
          <section
            key={section.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0px_20px_50px_rgba(0,0,0,0.08)]"
          >
            <header>
              <h2 className="text-2xl font-semibold text-[#1c1f35]">{section.heading}</h2>
            </header>

            {section.description && (
              <p className="mt-3 text-base leading-relaxed text-slate-600">{section.description}</p>
            )}

            {section.video && (
              <div className="mt-6 aspect-video w-full overflow-hidden rounded-3xl bg-black">
                <iframe
                  src={section.video.src}
                  title={section.video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            {section.paragraphs && section.paragraphs.length > 0 && (
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {section.bullets.map((bullet, index) => (
                  <li key={`${section.id}-bullet-${index}`} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#c01e27]" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.subsections && section.subsections.length > 0 && (
              <div className="mt-8 space-y-8">
                {section.subsections.map((subsection) => (
                  <article key={subsection.id} className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#1c1f35]">{subsection.title}</h3>

                    {subsection.paragraphs && subsection.paragraphs.length > 0 && (
                      <div className="space-y-3 text-base leading-relaxed text-slate-700">
                        {subsection.paragraphs.map((paragraph, index) => (
                          <p key={`${subsection.id}-paragraph-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {subsection.bullets && subsection.bullets.length > 0 && (
                      <ul className="space-y-3 text-sm text-slate-600">
                        {subsection.bullets.map((bullet, index) => (
                          <li key={`${subsection.id}-bullet-${index}`} className="flex gap-3">
                            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#c01e27]" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {subsection.afterBullets && subsection.afterBullets.length > 0 && (
                      <div className="space-y-3 text-base leading-relaxed text-slate-700">
                        {subsection.afterBullets.map((paragraph, index) => (
                          <p key={`${subsection.id}-after-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {subsection.image && (
                      <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <img
                          src={subsection.image.src}
                          alt={subsection.image.alt}
                          className="h-auto w-full"
                          loading="lazy"
                        />
                        {subsection.image.caption && (
                          <figcaption className="px-4 py-3 text-sm text-slate-500">{subsection.image.caption}</figcaption>
                        )}
                      </figure>
                    )}
                  </article>
                ))}
              </div>
            )}

            {section.documents && section.documents.length > 0 && (
              <div className="mt-6">
                <CooperativeDocumentList documents={section.documents} />
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};
