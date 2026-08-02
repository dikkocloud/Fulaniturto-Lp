import Button from './Button'
import { whatsappLink } from '../siteConfig'
import heroPortrait from '../assets/images/hero-portrait.jpg'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:pb-24"
    >
      {/* Decorative red arc behind portrait, echoes the sun motif from the brief */}
      <div
        className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-fulani-red/90 sm:h-96 sm:w-96 lg:right-[6%] lg:top-16"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <div className="animate-fade-up">
          <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Learn Fulfulde.
            <br />
            Discover a Culture.
            <br />
            <span className="italic text-fulani-red">Connect</span> With Africa
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-fulani-ink/70 sm:text-lg">
            Join a warm, welcoming community and learn the language that carries
            centuries of Fulani heritage, one conversation at a time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={whatsappLink('Hi Fulaniturto! I want to enrol in a class.')} variant="green">
              Enrol Now
            </Button>
            <Button href={whatsappLink('Hi Fulaniturto! I have a question.')} variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-xl sm:aspect-square lg:ml-auto lg:aspect-[4/5] lg:max-w-md">
            <img
              src={heroPortrait}
              alt="A woman in a navy and gold headwrap, smiling warmly, wearing traditional beaded jewelry"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 h-24 w-24 overflow-hidden rounded-full border-4 border-fulani-cream shadow-lg sm:h-28 sm:w-28 lg:-left-4">
            <img
              src={heroPortrait}
              alt="Close-up portrait of a young woman in a navy and gold headwrap with beaded jewelry"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
