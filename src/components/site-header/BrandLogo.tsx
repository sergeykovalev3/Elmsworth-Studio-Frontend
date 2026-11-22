import { brandName } from '../../brand'

export function BrandLogo() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 210 36"
      role="img"
      aria-label={brandName}
    >
      <title>{brandName}</title>
      <g fill="#58b198">
        <path d="M8 30c2-10 10-18 20-22-6 8-6 14 0 22-8 0-16-4-20 0Z" />
        <path d="M28 8c6 4 10 10 12 18H20c2-8 4-14 8-18Z" opacity="0.55" />
        <circle cx="28" cy="26" r="2.2" />
      </g>
      <text
        x="48"
        y="24"
        fill="#58b198"
        fontFamily="Outfit, system-ui, sans-serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.22em"
      >
        ELMSWORTH
      </text>
    </svg>
  )
}
