import React from 'react'
import { useI18n } from '../i18n/i18n'
import RevealOnScroll from './RevealOnScroll'

const HomeInfoSummary = () => {
  const { t } = useI18n()
  return (
    <section className="section-padding bg-[#f7f5ef]">
      <div className="container-layout grid gap-6 md:grid-cols-2">
        <RevealOnScroll from="left" className="card-soft p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[rgba(212,186,126,0.25)] bg-cardBg/60 p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#755D34]">{t('homeInfo.hours')}</p>
              <p className="mt-2 text-sm text-textMain">{t('homeInfo.hoursValue')}</p>
            </div>
            <div className="rounded-xl border border-[rgba(212,186,126,0.25)] bg-cardBg/60 p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#755D34]">{t('homeInfo.address')}</p>
              <p className="mt-2 text-sm text-textMain">{t('homeInfo.addressValue')}</p>
            </div>
            <div className="rounded-xl border border-[rgba(212,186,126,0.25)] bg-cardBg/60 p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#755D34]">{t('homeInfo.mapLabel')}</p>
              <a
                href="https://www.google.com/maps?q=RoofTop%20Lounge%20Baku"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full border border-[rgba(212,186,126,0.4)] px-4 py-2 text-sm text-textMain transition hover:bg-[#755D34] hover:text-white tap-scale"
              >
                {t('homeInfo.map')}
              </a>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll from="right" className="card-soft overflow-hidden">
          <iframe
            title="RoofTop Lounge location preview"
            src="https://www.google.com/maps?q=RoofTop%20Lounge%20Baku&output=embed"
            className="h-full min-h-[220px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default HomeInfoSummary
