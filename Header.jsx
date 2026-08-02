import { SOCIALS, mailtoLink } from '../siteConfig'

const YEAR = new Date().getFullYear()

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: SOCIALS.whatsapp,
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.117-1.334a9.96 9.96 0 004.887 1.245h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.182-2.929-7.072a9.935 9.935 0 00-7.072-2.839z',
  },
  {
    name: 'TikTok',
    href: SOCIALS.tiktok,
    path: 'M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z',
  },
  {
    name: 'Facebook',
    href: SOCIALS.facebook,
    path: 'M13.5 9H15V6.5h-1.5C11.57 6.5 10 8.07 10 10v1.5H8V14h2v7h2.5v-7H15l.5-2.5h-3V10c0-.55.45-1 1-1z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-fulani-ink px-5 pb-10 pt-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-8">
          <ul className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Fulaniturto on ${social.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-fulani-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-fulani-green"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={mailtoLink()}
            className="inline-flex items-center justify-center rounded-full bg-fulani-green px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-fulani-green-dark focus-visible:outline focus-visible:outline-offset-2"
          >
            Email Us
          </a>

          <p className="text-center text-xs text-fulani-cream/50">
            &copy; {YEAR} Fulaniturto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
