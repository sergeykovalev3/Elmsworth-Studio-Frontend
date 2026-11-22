import './HomeWidePhoto.css'

export function HomeWidePhoto({ src, alt }: { src: string; alt: string }) {
  return <img className="home-wide-photo" src={src} alt={alt} />
}
