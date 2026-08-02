import Button from './Button'
import { whatsappLink } from '../siteConfig'
import useReveal from '../hooks/useReveal'

export default function FinalCta() {
  const ref = useReveal()

  return (
    <section className="bg-fulani-ink px-5 py-16 sm:px-8 lg:py-20">
      <div
        ref={ref}
        className="reveal mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
      >
        <h2 className="max-w-lg font-display text-3xl font-semibold italic leading-tight text-fulani-cream sm:text-4xl">
          Ready to Begin Your Fulani Language Journey?
        </h2>

        <Button
          href={whatsappLink('Hi Fulaniturto! I want to enrol for classes.')}
          variant="green"
          className="shrink-0"
        >
          Enrol for Classes
        </Button>
      </div>
    </section>
  )
}
