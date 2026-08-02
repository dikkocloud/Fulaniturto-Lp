import StickerBadge from './StickerBadge'
import baskets from '../assets/images/baskets.jpg'
import useReveal from '../hooks/useReveal'

const SKILLS = ['Speaking', 'Reading', 'Listening']

export default function WhatYoullLearn() {
  const ref = useReveal()

  return (
    <section id="learn" className="relative overflow-hidden bg-fulani-red px-5 py-16 sm:px-8 lg:py-24">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-fulani-cream sm:text-4xl">
          What You&rsquo;ll Learn
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-3 lg:mt-14">
          {SKILLS.map((skill, i) => (
            <div key={skill} className={`flex justify-center reveal reveal-delay-${i + 1}`}>
              <StickerBadge label={skill} size="lg" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-14">
          <StickerBadge label="Writing" size="lg" tone="cream" />
        </div>
      </div>

      {/* Subtle woven-basket texture strip, ties the palette back to the craft imagery */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-40 opacity-20 mix-blend-luminosity lg:block"
        style={{
          backgroundImage: `url(${baskets})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
