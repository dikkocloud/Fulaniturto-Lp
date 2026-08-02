/**
 * Scalloped "sticker" badge — the signature shape from the design.
 * Pure CSS via clip-path so it stays crisp at any size and needs no image asset.
 */
export default function StickerBadge({ label, size = 'md', tone = 'light', className = '' }) {
  const sizes = {
    md: 'h-32 w-32 text-sm sm:h-36 sm:w-36 sm:text-base',
    lg: 'h-36 w-36 text-base sm:h-40 sm:w-40 sm:text-lg',
  }

  const tones = {
    light: 'bg-fulani-cream text-fulani-ink',
    cream: 'bg-white text-fulani-ink',
  }

  return (
    <div
      className={`sticker-badge flex items-center justify-center text-center font-display font-semibold shadow-md transition-transform duration-300 ease-out hover:scale-105 ${sizes[size]} ${tones[tone]} ${className}`}
    >
      <span className="px-4">{label}</span>
    </div>
  )
}
