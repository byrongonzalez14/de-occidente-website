import type { DestinationContentSection } from "../../data/destinationDetails";

interface DestinationContentSectionsProps {
  sections: DestinationContentSection[];
}

export const DestinationContentSections = ({ sections }: DestinationContentSectionsProps): JSX.Element => {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <section
          key={`${section.title}-${index}`}
          className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-[0px_15px_40px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-2xl font-semibold text-[#c01e27]">{section.title}</h2>
          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex} className="mt-4 text-base leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-4 space-y-2 text-base text-slate-700">
              {section.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start gap-2">
                  <span className="mt-[0.4rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c01e27]" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};
