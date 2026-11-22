import { brandAddress, brandFull, brandMapHref, brandPhone, brandPhoneHref } from '../../brand'
import { BrandLogo } from '../site-header/BrandLogo'
import { PhoneIcon } from '../site-header/icons/NavIcons'
import { PinIcon } from './PinIcon'
import { socialIcons } from '../site-header/icons/SocialIcons'
import { mainNav, socialLinks } from '../site-header/nav'
import { SiteLink } from '../site-header/SiteLink'
import './SiteFooter.css'

const designBuild = mainNav.find((item) => item.label === 'Design-Build')
const maintenance = mainNav.find((item) => item.label === 'Maintenance')

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <SiteLink to="/" className="site-footer-logo" aria-label={brandFull}>
            <BrandLogo />
          </SiteLink>
          <div>
            <div className="site-footer-heading">Build with {brandFull}</div>
            <p>
              Design, build, and year-round care from one studio. Quiet luxury
              outside, kept in good order through the seasons.
            </p>
          </div>
        </div>
        {designBuild?.groups && designBuild.to ? (
          <div className="site-footer-col">
            <SiteLink to={designBuild.to} className="site-footer-heading">
              {designBuild.label}
            </SiteLink>
            {designBuild.groups.map((group) => (
              <SiteLink key={group.to} to={group.to} className="site-footer-link">
                {group.label}
              </SiteLink>
            ))}
          </div>
        ) : null}
        {maintenance?.groups && maintenance.to ? (
          <div className="site-footer-col">
            <SiteLink to={maintenance.to} className="site-footer-heading">
              {maintenance.label}
            </SiteLink>
            {maintenance.groups.map((group) => (
              <SiteLink key={group.to} to={group.to} className="site-footer-link">
                {group.label}
              </SiteLink>
            ))}
          </div>
        ) : null}
        <div className="site-footer-col">
          <SiteLink to="/projects" className="site-footer-heading">
            Portfolio
          </SiteLink>
          <SiteLink to="/team-and-community" className="site-footer-heading">
            Team
          </SiteLink>
          <SiteLink to="/blog" className="site-footer-heading">
            Blog
          </SiteLink>
        </div>
        <div className="site-footer-col">
          <SiteLink to="/contact" className="site-footer-heading">
            Contact
          </SiteLink>
          <div className="site-footer-row">
            <span className="site-footer-glyph">
              <PhoneIcon />
            </span>
            <a href={brandPhoneHref}>{brandPhone}</a>
          </div>
          <div className="site-footer-row">
            <span className="site-footer-glyph" aria-hidden>
              <PinIcon />
            </span>
            <a href={brandMapHref} target="_blank" rel="noreferrer">
              {brandAddress[0]}
              <br />
              {brandAddress[1]}
            </a>
          </div>
          <div className="site-footer-social">
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label]
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
