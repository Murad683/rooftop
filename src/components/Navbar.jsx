import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LangSwitch from './LangSwitch'
import { useI18n } from '../i18n/i18n'

const linkDefs = [
  { to: '/', key: 'nav.home' },
  { to: '/menu', key: 'nav.menu' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/reservation', key: 'nav.reservation' },
  { to: '/contact', key: 'nav.contact' },
]

const Navbar = () => {
  const { t } = useI18n()
  const [navReady, setNavReady] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)
  const [menuShown, setMenuShown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setNavReady(true)
      return
    }
    const id = requestAnimationFrame(() => setNavReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    setMenuShown(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuShown && !menuMounted) {
      setMenuMounted(true)
      requestAnimationFrame(() => setMenuShown(true))
    }
  }, [menuShown, menuMounted])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuShown(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [menuShown])

  useEffect(() => {
    if (!menuShown && menuMounted) {
      const id = setTimeout(() => setMenuMounted(false), 250)
      return () => clearTimeout(id)
    }
  }, [menuShown, menuMounted])

  const toggleMenu = () => {
    if (menuShown) setMenuShown(false)
    else {
      setMenuMounted(true)
      requestAnimationFrame(() => setMenuShown(true))
    }
  }

  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out ${
        navReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${
        isScrolled
          ? 'bg-[rgba(250,247,240,0.9)] backdrop-blur border-b border-[rgba(0,0,0,0.05)] shadow-[0_12px_30px_rgba(0,0,0,0.08)]'
          : 'bg-white/85 backdrop-blur border-b border-[rgba(0,0,0,0.05)] shadow-[0_10px_25px_rgba(0,0,0,0.05)] md:bg-transparent md:border-transparent md:shadow-none'
      }`}
    >
      <nav className="container-layout flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 text-left">
          <span className="rounded-full border border-[rgba(0,0,0,0.08)] bg-white/70 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-[#755D34]">
            {t('brand.name')}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {linkDefs.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? 'is-active' : ''}`}
            >
              {t(item.key)}
            </Link>
          ))}
          <LangSwitch />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="inline-flex flex-col items-center justify-center gap-1 rounded-full border border-[rgba(0,0,0,0.08)] bg-white/85 p-2"
            onClick={toggleMenu}
            aria-label={menuShown ? t('nav.close') : t('nav.open')}
            aria-expanded={menuShown}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{menuShown ? t('nav.close') : t('nav.open')}</span>
            <span className={`block h-0.5 bg-[#755D34] transition-all duration-200 ${menuShown ? 'w-6' : 'w-4'}`} />
            <span className="block h-0.5 w-6 bg-[#755D34] transition-all duration-200" />
            <span className={`block h-0.5 bg-[#755D34] transition-all duration-200 ${menuShown ? 'w-6' : 'w-6'}`} />
          </button>
        </div>
      </nav>

      {menuMounted && (
        <>
          <div
            id="mobile-menu"
            className={`fixed top-16 md:top-20 inset-x-0 z-40 border-t border-[rgba(0,0,0,0.05)] bg-[rgba(250,247,240,0.95)] backdrop-blur md:hidden transform transition-all duration-300 ${
              menuShown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="container-layout flex flex-col py-2">
              {linkDefs.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuShown(false)}
                  className={`nav-link text-left py-3 text-sm ${
                    isActive(item.to) ? 'is-active' : ''
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-4 border-t border-[rgba(0,0,0,0.05)] pt-3 flex justify-center">
                <LangSwitch onChange={() => setMenuShown(false)} />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar
