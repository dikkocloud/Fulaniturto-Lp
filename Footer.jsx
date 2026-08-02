import { WHATSAPP_DISPLAY, whatsappLink } from '../siteConfig'
import useReveal from '../hooks/useReveal'

export default function AnyQuestion() {
  const ref = useReveal()

  return (
    <section id="contact" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div ref={ref} className="reveal order-2 lg:order-1">
          <h2 className="font-display text-3xl font-semibold italic sm:text-4xl">
            Any question?
          </h2>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center justify-between gap-4 rounded-2xl bg-fulani-red px-6 py-5 text-fulani-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-offset-2"
          >
            <span className="text-base font-semibold sm:text-lg">Send us a message</span>
            <span className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold sm:text-base">
              <svg
                className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.117-1.334a9.96 9.96 0 004.887 1.245h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.182-2.929-7.072a9.935 9.935 0 00-7.072-2.839zm5.867 15.865a8.29 8.29 0 01-5.868 2.43h-.003a8.29 8.29 0 01-4.223-1.157l-.303-.18-3.037.792.811-2.96-.198-.304a8.264 8.264 0 01-1.267-4.42c0-4.582 3.73-8.312 8.317-8.312a8.257 8.257 0 015.878 2.437 8.257 8.257 0 012.43 5.876c0 4.583-3.73 8.313-8.317 8.313h-.02z" />
              </svg>
              {WHATSAPP_DISPLAY}
            </span>
          </a>

          <p className="mt-4 text-sm text-fulani-ink/60">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:fulaniturto111@gmail.com"
              className="font-medium text-fulani-green underline decoration-fulani-green/40 underline-offset-2 hover:text-fulani-green-dark"
            >
              fulaniturto111@gmail.com
            </a>
          </p>
        </div>

        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-xl">
            <img
              src="https://images.pexels.com/photos/15669695/pexels-photo-15669695.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Portrait of a woman wearing vibrant traditional beaded jewelry and headwrap"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
