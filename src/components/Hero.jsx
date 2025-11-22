import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import heroVisual from '../assets/rooftop-lounge2.jpg'
import RevealOnScroll from './RevealOnScroll'

const heroOffers = [
  {
    id: 'classic',
    titleKey: 'hero.rightTitle',
    descKey: 'hero.rightDesc',
    noteKey: 'hero.rightNote',
    barWidthClass: 'w-2/3',
  },
  {
    id: 'shah-plov',
    titleKey: 'gallery.img1Title',
    descKey: 'gallery.img1Sub',
    noteKey: 'hero.rightNote',
    barWidthClass: 'w-3/4',
  },
  {
    id: 'kebab',
    titleKey: 'gallery.img2Title',
    descKey: 'gallery.img2Sub',
    noteKey: 'hero.rightNote',
    barWidthClass: 'w-3/5',
  },
  {
    id: 'dessert',
    titleKey: 'gallery.img3Title',
    descKey: 'gallery.img3Sub',
    noteKey: 'hero.rightNote',
    barWidthClass: 'w-1/2',
  },
]

const Hero = () => {
  const navigate = useNavigate()
  const { t } = useI18n()
  const offer = useMemo(
    () => heroOffers[Math.floor(Math.random() * heroOffers.length)],
    []
  )

  const goMenu = () => navigate('/menu')
  const goReservation = () => navigate('/reservation')
  const scrollToMenuShowcase = () => {
    if (typeof document === 'undefined') return
    const el = document.getElementById('home-menu-showcase')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#f7f5ef] text-textMain"
      >
        <div className="container-layout grid items-center gap-10 py-10 md:grid-cols-[1.05fr,0.95fr] lg:py-18">
          <div className="order-1 md:order-none">
            <RevealOnScroll from="up" delayClass="delay-75">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#755D34]">
                {t('hero.eyebrow')}
              </p>
          </RevealOnScroll>
          <RevealOnScroll from="up" delayClass="delay-150">
            <h1 className="font-serif text-4xl tracking-[0.05em] text-textMain sm:text-5xl md:text-[3.25rem]">
              {t('hero.title')}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll from="up" delayClass="delay-200">
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-textMuted sm:text-base">
              {t('hero.desc')}
            </p>
          </RevealOnScroll>

          <RevealOnScroll from="up" delayClass="delay-300">
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button onClick={goReservation} className="btn-primary shadow-soft">
                {t('hero.ctaReserve')}
              </button>
              <button onClick={goMenu} className="btn-secondary md:w-auto">
                {t('hero.ctaMenu')}
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll from="up" delayClass="delay-500">
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-textMuted">
              <div>
                {t('hero.addrLine1')}
                <br />
                <span className="text-[11px] text-textMuted">{t('hero.addrLine2')}</span>
              </div>
              <div>
                {t('hero.hoursPrefix')} {t('hero.hoursValue')}
                <br />
                {t('brand.phone')}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll from="right" delayClass="delay-300" className="order-2 hidden w-full md:order-2 md:block">
          <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_25px_65px_rgba(15,15,15,0.12)]">
            <div className="relative h-64 w-full md:h-80">
              <img
                src={heroVisual}
                alt={`${t('brand.name')} rooftop`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1116]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.4em] text-lightBg/80">
                {t('brand.name')}
              </div>
            </div>
            <div className="space-y-4 border-t border-textMain/5 p-6 sm:p-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-textMuted">
                  {t('hero.rightEyebrow')}
                </p>
                <p className="mt-3 font-serif text-[1.35rem] leading-snug text-textMain">
                  {t(offer.titleKey)}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-textMuted">
                  {t(offer.descKey)}
                </p>
              </div>
              <div className="border-t border-textMain/10 pt-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[12px] text-textMuted">{t('hero.rightToday')}</span>
                  <span className="rounded-full border border-[rgba(212,186,126,0.3)] bg-[rgba(212,186,126,0.1)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#755D34]">
                    {t('hero.rightLimited')}
                  </span>
                </div>
                <div className="mt-4 h-1.5 w-full rounded-full bg-cardBg">
                  <div className="h-full rounded-full bg-[#D4BA7E]" style={{ width: '80%' }} />
                </div>
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 text-[11px] text-textMuted transition hover:text-[#755D34]"
                  onClick={goReservation}
                >
                  <span>{t(offer.noteKey)}</span>
                  <span aria-hidden>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={scrollToMenuShowcase}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-textMain/10 bg-white/80 text-textMain/60 shadow-soft transition-all duration-300 hover:border-textMain/40 hover:text-textMain hover:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-textMain/20"
          aria-label="Scroll to menu section"
        >
          <span aria-hidden>&darr;</span>
        </button>
      </div>
      </section>

      <section className="md:hidden bg-lightBg px-5 pb-14 text-textMain">
        <div className="mx-auto max-w-xl rounded-3xl border border-textMain/5 bg-white/80 p-6 shadow-soft">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-textMuted">{t('hero.rightEyebrow')}</p>
          <p className="mt-3 font-serif text-2xl leading-snug text-textMain">{t(offer.titleKey)}</p>
          <p className="mt-3 text-sm leading-relaxed text-textMuted">{t(offer.descKey)}</p>
          <div className="mt-5 border-t border-textMain/10 pt-4 space-y-3 text-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[12px] text-textMuted">{t('hero.rightToday')}</span>
              <span className="rounded-full border border-[rgba(212,186,126,0.3)] bg-[rgba(212,186,126,0.1)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#755D34]">
                {t('hero.rightLimited')}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-cardBg">
              <div className="h-full rounded-full bg-[#D4BA7E]" style={{ width: '80%' }} />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[11px] text-textMuted transition hover:text-[#755D34]"
              onClick={goReservation}
            >
              <span>{t(offer.noteKey)}</span>
              <span aria-hidden>&rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
