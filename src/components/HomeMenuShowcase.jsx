import React from 'react'
import SectionTitle from './SectionTitle'
import RevealOnScroll from './RevealOnScroll'
import { useI18n } from '../i18n/i18n'

const HomeMenuShowcase = () => {
  const { t } = useI18n()
  const cards = Array.isArray(t('experience.cards')) ? t('experience.cards') : []
  const cardLabel = t('experience.cardLabel')

  return (
    <section id="home-menu-showcase" className="section-padding bg-[#f7f5ef]">
      <div className="container-layout">
        <RevealOnScroll from="up">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow={t('experience.eyebrow')} title={t('experience.title')} />
            <p className="max-w-md text-sm leading-relaxed text-textMuted">{t('experience.desc')}</p>
          </div>
        </RevealOnScroll>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card, idx) => (
            <RevealOnScroll
              key={card.title}
              from="up"
              delayClass={idx === 0 ? '' : idx === 1 ? 'delay-100' : idx === 2 ? 'delay-150' : 'delay-200'}
              className="card-soft p-6 sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#755D34]">{card.tag || cardLabel}</p>
              <h3 className="mt-2 font-serif text-xl tracking-wide text-textMain">{card.title}</h3>
              <p className="mt-2 text-sm text-textMuted">{card.text}</p>
              {card.meta && (
                <div className="mt-4 inline-flex items-center rounded-full bg-primaryBg/90 px-4 py-2 text-lightBg">
                  <span className="text-sm">{card.meta}</span>
                </div>
              )}
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeMenuShowcase
