import React from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'
import instagramIcon from '../assets/instagram-icon.svg'
import phoneIcon from '../assets/phone.svg'

const Contact = () => {
  const { t } = useI18n()
  return (
    <section id="contact" className="section-padding bg-[#f7f5ef]">
      <div className="container-layout grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <SectionTitle eyebrow={t('contact.eyebrow')} title={t('contact.title')} />
          <p className="mt-6 text-sm leading-relaxed text-textMuted sm:text-base">{t('contact.desc')}</p>

          <div className="mt-6 space-y-4 text-sm text-textMuted">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#755D34]">{t('about.addrLabel')}</p>
              <p className="mt-1 text-textMain">{t('contact.addr')}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#755D34]">{t('contact.phone')}</p>
              <div className="mt-2">
                <a
                  href={`tel:+${t('brand.phoneLink') || '994552025200'}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[rgba(212,186,126,0.4)] px-4 py-2 text-textMain transition hover:bg-[#755D34] hover:text-white tap-scale"
                >
                  <img src={phoneIcon} alt="" className="h-4 w-4" aria-hidden />
                  <span>{t('brand.phone')}</span>
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#755D34]">Instagram</p>
              <div className="mt-2">
                <a
                  href="https://www.instagram.com/rooftoprestaurantbaku/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[rgba(212,186,126,0.4)] px-4 py-2 text-textMain transition hover:bg-[#755D34] hover:text-white tap-scale"
                >
                  <img src={instagramIcon} alt="" className="h-4 w-4" aria-hidden />
                  <span>@rooftoprestaurantbaku</span>
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#755D34]">{t('contact.hoursLabel')}</p>
              <p className="mt-1 text-textMain">{t('contact.hoursValue')}</p>
            </div>
          </div>
        </div>

        <div className="card-soft overflow-hidden">
          <iframe
            title="RoofTop Lounge location"
            src="https://www.google.com/maps?q=RoofTop%20Lounge%20Baku&output=embed"
            className="h-full min-h-[260px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
