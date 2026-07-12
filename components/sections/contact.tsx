import { FadeUp } from '../animations/fade-up';

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 1.973 14.106.95 11.493.95c-5.438 0-9.863 4.37-9.867 9.8-.001 1.73.457 3.418 1.32 4.937l-.989 3.612 3.689-.958zm12.39-7.14c-.322-.16-1.905-.94-2.202-1.05-.297-.109-.513-.16-.73.16-.217.32-.839 1.05-1.029 1.26-.19.21-.38.24-.702.08-.322-.16-1.36-.5-2.594-1.602-.96-.856-1.607-1.912-1.796-2.23-.19-.32-.02-.492.14-.652.144-.144.322-.375.483-.563.16-.188.214-.32.322-.53.109-.21.054-.393-.027-.553-.08-.16-.73-1.76-.999-2.413-.263-.632-.53-.547-.73-.557-.188-.008-.405-.01-.621-.01-.216 0-.567.08-.865.407-.297.32-1.135 1.11-1.135 2.703 0 1.593 1.162 3.13 1.323 3.34.162.21 2.287 3.5 5.542 4.905.774.333 1.379.533 1.85.683.777.247 1.484.212 2.043.128.622-.094 1.905-.78 2.176-1.534.271-.753.271-1.4.19-1.53-.08-.13-.297-.21-.62-.37z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const CONTACTS = [
  {
    id: 1,
    icon: EmailIcon,
    label: 'Email',
    value: 'audyhidayat31@gmail.com',
    href: 'mailto:audyhidayat31@gmail.com',
    color: 'text-red-500',
  },
  {
    id: 2,
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'audy-abdillah-hidayat',
    href: 'https://linkedin.com/in/audy-abdillah-hidayat-570942402/',
    color: 'text-blue-600',
  },
  {
    id: 3,
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'Audyhidayat31',
    href: 'https://github.com/Audyhidayat31',
    color: 'text-foreground',
  },
  {
    id: 4,
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+62 812 9747 2004',
    href: 'https://wa.me/6281297472004',
    color: 'text-emerald-500',
  },
  {
    id: 5,
    icon: InstagramIcon,
    label: 'Instagram',
    value: 'audyyhdytz',
    href: 'https://instagram.com/audyyhdytz',
    color: 'text-pink-500',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-center uppercase tracking-wider">
            MARI TERHUBUNG
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi saya untuk proyek, kolaborasi, atau sekadar mengobrol santai. Saya selalu tertarik untuk mendengar tentang peluang baru.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CONTACTS.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <FadeUp key={contact.id} delay={idx * 0.1} className="h-full">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-6 border border-emerald-500/50 rounded-xl bg-slate-900/80 transition-all duration-300 shadow-lg cursor-pointer hover:-translate-y-2 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] h-full"
                >
                  <Icon className={`w-8 h-8 mb-3 ${contact.color} transition-transform duration-300 group-hover:scale-110`} />
                  <h3 className="font-bold mb-1 group-hover:text-emerald-400 transition-colors">{contact.label}</h3>
                  <p className="text-xs text-foreground/60 break-all group-hover:text-emerald-200 transition-colors">
                    {contact.value}
                  </p>
                </a>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
