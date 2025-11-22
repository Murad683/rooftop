import React from 'react'
import { useI18n } from '../i18n/i18n'

const socialIcon = (key) => {
  const baseProps = {
    className: 'h-4 w-4',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  }

  if (key === 'instagram') {
    return (
      <svg {...baseProps}>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    )
  }
  if (key === 'tiktok') {
    return (
      <svg {...baseProps}>
        <path
          d="M14 4c.2 2.4 1.8 4.3 4 4.5v2a6 6 0 0 1-3.3-1.1v5.3a4.5 4.5 0 1 1-3.8-4.4v2.2a2.5 2.5 0 1 0 1.8 2.4V4h1.3Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  return (
    <svg {...baseProps}>
      <path
        d="M12 5.5a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4.5 8.5 4.5 8.5s4.5-5.3 4.5-8.5A4.5 4.5 0 0 0 12 5.5Zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Footer = () => {
  const { t } = useI18n()
  const phoneLink = `tel:+${t('brand.phoneLink') || '994552025200'}`
  const socialLinks = [
    { key: 'instagram', label: t('footer.instagram'), href: 'https://www.instagram.com/rooftoprestaurantbaku/' },
    { key: 'tiktok', label: t('footer.tiktok'), href: 'https://www.tiktok.com/@rooftop.baku' },
    { key: 'maps', label: t('footer.maps'), href: 'https://www.google.com/maps?q=RoofTop%20Lounge%20Baku' },
  ]
  const whatsappMessage = encodeURIComponent('Salam vebsaytlarla maraqlanıram')
  const whatsappHref = `https://wa.me/994505131380?text=${whatsappMessage}`

  return (
    <footer className="bg-[#f7f5ef] text-textMuted">
      <div className="container-layout border-t border-textMain/10 py-12">
        <div className="grid gap-10 text-sm md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-2xl font-serif uppercase tracking-[0.35em] text-textMain">
              {t('brand.name')}
            </p>
            <p className="text-[13px] leading-relaxed text-textMuted sm:text-sm">{t('footer.tagline')}</p>
            <p className="text-xs uppercase tracking-[0.35em] text-textMuted/80">{t('brand.subtitle')}</p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.5em] text-textMuted/80">{t('footer.hoursHeading')}</p>
            <p className="text-lg font-medium text-textMain">{t('brand.hours')}</p>
            <a href={phoneLink} className="btn-primary mx-auto w-full md:mx-0 md:w-auto">
              {t('footer.cta')}
            </a>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.5em] text-textMuted/80">{t('footer.contactHeading')}</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-textMuted/80">{t('footer.phoneLabel')}</p>
                <a
                  href={phoneLink}
                  className="mt-1 inline-flex items-center justify-center text-base font-medium text-textMain transition hover:text-[#755D34] md:justify-start"
                >
                  {t('brand.phone')}
                </a>
              </div>
              <p>{t('footer.address')}</p>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.5em] text-textMuted/80">{t('footer.socialsLabel')}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,186,126,0.35)] text-[#755D34]/70 transition hover:border-[#D4BA7E] hover:text-[#755D34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(117,93,52,0.4)]"
                >
                  {socialIcon(link.key)}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-textMain/10 pt-5 text-center text-[11px] text-textMuted/80 sm:flex-row sm:text-left">
          <p>{t('footer.copyright')}</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="text-textMain underline decoration-textMain/25 underline-offset-4 transition-colors hover:text-[#755D34]"
          >
            {t('footer.createdBy')}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
