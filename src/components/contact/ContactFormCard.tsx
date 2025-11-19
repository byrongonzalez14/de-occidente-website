import emailjs from "@emailjs/browser";
import { FormEvent, useMemo, useState } from "react";

interface ContactFormCardProps {
  onSubmit?: (formData: ContactFormFields) => Promise<void> | void;
}

export type ContactFormFields = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  topic: string;
};

const initialValues: ContactFormFields = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  topic: "general",
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const topicLabels: Record<string, string> = {
  general: "Información general",
  encomiendas: "Encomiendas y logística",
  pasajeros: "Transporte de pasajeros",
  convenios: "Convenios empresariales",
  pqrs: "PQRS",
};

const sanitizePayload = (values: ContactFormFields) => ({
  subject: topicLabels[values.topic] ?? values.topic,
  full_name: values.fullName,
  email: values.email,
  phone: values.phone,
  message: values.message,
});

const sendContactEmail = async (values: ContactFormFields) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error("EmailJS environment variables are not configured.");
  }

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, sanitizePayload(values), EMAILJS_PUBLIC_KEY);
};

export const ContactFormCard = ({ onSubmit }: ContactFormCardProps): JSX.Element => {
  const [formValues, setFormValues] = useState<ContactFormFields>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmitAction = useMemo(() => onSubmit ?? sendContactEmail, [onSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await handleSubmitAction(formValues);
      setStatus("success");
      setFormValues(initialValues);
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="page-section py-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Escríbenos</p>
          <h2 className="text-3xl font-semibold text-[#1c1f35]">Cuéntanos cómo podemos ayudarte</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Diligencia el formulario y uno de nuestros asesores se pondrá en contacto contigo en menos de 24 horas hábiles.
          </p>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0px_24px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="topic" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27]">
                  Asunto
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formValues.topic}
                  onChange={handleChange}
                  className="h-12 rounded-full border border-slate-200 px-5 text-sm text-slate-700 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
                  required
                >
                  <option value="general">Información general</option>
                  <option value="encomiendas">Encomiendas y logística</option>
                  <option value="pasajeros">Transporte de pasajeros</option>
                  <option value="convenios">Convenios empresariales</option>
                  <option value="pqrs">PQRS</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27]">
                  Nombre completo
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={handleChange}
                  className="h-12 rounded-full border border-slate-200 px-5 text-sm text-slate-700 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27]">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="h-12 rounded-full border border-slate-200 px-5 text-sm text-slate-700 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
                  placeholder="tuemail@dominio.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27]">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="h-12 rounded-full border border-slate-200 px-5 text-sm text-slate-700 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
                  placeholder="Ej. +57 310 555 1234"
                  required
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27]">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="min-h-[140px] rounded-3xl border border-slate-200 px-6 py-4 text-sm text-slate-700 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
                placeholder="Cuéntanos en qué podemos apoyarte"
                required
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#c01e27] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#a41822] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c01e27]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-emerald-600">¡Gracias! Hemos recibido tu mensaje.</p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">Ocurrió un error. Intenta nuevamente.</p>
              )}
            </div>
          </form>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0px_24px_60px_rgba(0,0,0,0.08)]">
          <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#c01e27]">¿Prefieres llamarnos?</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Resolvemos tus consultas también a través de nuestra línea principal y canales digitales. Haz clic para comunicarte directamente.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="tel:+576022297017"
              className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#c01e27] transition hover:border-[#c01e27]"
            >
              <span>PBX Roldanillo</span>
              <span>+57 (602) 229 7017</span>
            </a>
            <a
              href="https://wa.me/573105551234"
              className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#c01e27] transition hover:border-[#c01e27]"
            >
              <span>WhatsApp empresarial</span>
              <span>+57 310 555 1234</span>
            </a>
            <a
              href="mailto:servicios@deoccidente.com"
              className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#c01e27] transition hover:border-[#c01e27]"
            >
              <span>Correo corporativo</span>
              <span>servicios@deoccidente.com</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};
