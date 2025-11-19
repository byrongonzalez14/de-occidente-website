import { mainOffice } from "../../data/contactInfo";

export const ContactMainOffice = (): JSX.Element => {
  return (
    <section className="page-section py-16" aria-labelledby="main-office-heading">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]" id="main-office-heading">
            Oficina principal
          </p>
          <h2 className="text-3xl font-semibold text-[#1c1f35]">Estamos en el corazón del norte del Valle</h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600">
            Visítanos en nuestra base operativa de Roldanillo o comunícate por nuestros canales oficiales. Desde aquí coordinamos la red de servicios para pasajeros y logística.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-stretch">
          <div className="overflow-hidden rounded-3xl shadow-[0px_24px_60px_rgba(0,0,0,0.12)]">
            <iframe
              src={mainOffice.mapEmbedUrl}
              title="Ubicación oficina principal De Occidente"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-[0px_24px_60px_rgba(0,0,0,0.1)]">
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Dirección</h3>
                <p className="mt-2 text-lg font-semibold text-[#1c1f35]">{mainOffice.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{mainOffice.address}</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Teléfono</h3>
                <a
                  href={`tel:${mainOffice.phone.replace(/[^0-9+]/g, "")}`}
                  className="mt-2 block text-base font-semibold text-[#c01e27] transition hover:text-[#a41822]"
                >
                  {mainOffice.phone}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Correo</h3>
                <a
                  href={`mailto:${mainOffice.email}`}
                  className="mt-2 block text-sm font-medium text-[#c01e27] transition hover:text-[#a41822]"
                >
                  {mainOffice.email}
                </a>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Cooperativa+De+Occidente+Roldanillo"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c01e27] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#a41822]"
            >
              Cómo llegar
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
