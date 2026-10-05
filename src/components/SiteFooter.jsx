import { socialLinks } from '../content/siteContent'

function SiteFooter({ copy }) {
  return (
    <footer className="site-footer" id="contato">
      <div className="footer-brand">
        <span className="brand-mark" aria-hidden="true">TO</span>
        <span className="brand-text">
          <span className="brand-name">Thalita Oliveira</span>
          <span className="brand-role">{copy.role}</span>
        </span>
      </div>

      <p className="footer-note">{copy.footerNote}</p>

      <div className="footer-links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default SiteFooter
