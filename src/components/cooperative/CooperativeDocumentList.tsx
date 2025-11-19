interface CooperativeDocumentListProps {
  documents: { label: string; fileName: string; url?: string }[];
}

export const CooperativeDocumentList = ({ documents }: CooperativeDocumentListProps): JSX.Element => {
  return (
    <ul className="space-y-3">
      {documents.map((document) => {
        const href = document.url ?? `/docs/${document.fileName}`;
        return (
          <li key={document.label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fef3f4] text-[#c01e27]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6l-4-4z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 13h6M7 16h4M7 10h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1c1f35]">{document.label}</p>
                <p className="text-xs text-slate-500">{document.fileName}</p>
              </div>
            </div>

            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-[#c01e27] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#a41822]"
              download
            >
              Descargar
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M7 1v8M3 7l4 4 4-4M2 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
