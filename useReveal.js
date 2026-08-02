import hatPortrait from '../assets/images/hat-portrait.jpg'
import baskets from '../assets/images/baskets.jpg'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="aspect-[5/4] w-full overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={baskets}
              alt="A colourful array of hand-woven Fulani baskets in red, purple, teal and gold"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-5 -top-5 h-20 w-20 overflow-hidden rounded-full border-4 border-fulani-cream shadow-lg sm:h-24 sm:w-24">
            <img
              src={hatPortrait}
              alt="Portrait of a person wearing a traditional woven hat with beaded ornaments"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div ref={ref} className="reveal">
          <span className="mb-3 inline-block rounded-full bg-fulani-terracotta/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-fulani-terracotta">
            Our story
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            About Fulaniturto
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-fulani-ink/70 sm:text-lg">
            We help people around the world learn the Fulani language, understand
            Fulani culture, and appreciate the beauty of its{' '}
            <span className="italic text-fulani-green">colourful</span> heritage.
          </p>
        </div>
      </div>
    </section>
  )
}
