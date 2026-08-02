const VARIANTS = {
  green:
    'bg-fulani-green text-white hover:bg-fulani-green-dark focus-visible:outline-fulani-green-dark',
  red: 'bg-fulani-red text-white hover:bg-fulani-red-dark focus-visible:outline-fulani-red-dark',
  ink: 'bg-fulani-ink text-fulani-cream hover:bg-black focus-visible:outline-fulani-cream',
  outline:
    'bg-transparent text-fulani-ink border-2 border-fulani-ink hover:bg-fulani-ink hover:text-fulani-cream',
}

/**
 * Shared CTA button. Renders as an <a> so every action (WhatsApp, mailto,
 * anchor scroll) works the same way without JS routing.
 */
export default function Button({
  href,
  children,
  variant = 'green',
  className = '',
  external = true,
  ...props
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm focus-visible:outline focus-visible:outline-offset-2 ${VARIANTS[variant]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  )
}
