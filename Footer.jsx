import Button from './Button'
import { whatsappLink } from '../siteConfig'
import useReveal from '../hooks/useReveal'

const TAGS = [
  { label: 'Interactive', tone: 'bg-fulani-terracotta text-white', rotate: '-rotate-2' },
  { label: 'Beginner friendly', tone: 'bg-fulani-red text-white', rotate: 'rotate-1' },
  { label: 'Learn from anywhere', tone: 'bg-fulani-ink text-fulani-cream', rotate: '-rotate-1' },
]

export default function Support() {
  const ref = useReveal()

  return (
    <section id="support" className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24">
      {/* Soft mint blob echoing the eco theme, purely decorative */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-emerald-100/60 blur-2xl"
        aria-hidden="true"
      />

      <div ref={ref} className="reveal mx-auto max-w-4xl text-center">
        <p className="mx-auto max-w-md text-base leading-relaxed text-fulani-ink/70 sm:text-lg">
          Together, we can make a positive impact on the planet. Help support our
          eco-friendly projects by donating here.
        </p>

        <h2 className="mt-8 font-display text-3xl font-semibold italic text-fulani-green sm:text-4xl">
          We also want you to know
        </h2>

        <div className="mt-8">
          <Button href={whatsappLink('Hi Fulaniturto! I would like to support your eco-friendly projects.')} variant="green">
            Support
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {TAGS.map((tag) => (
            <span
              key={tag.label}
              className={`inline-block rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${tag.tone} ${tag.rotate}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
