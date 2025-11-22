import React from 'react'
import { useI18n } from '../i18n/i18n'

const LANGS = [
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

const LangSwitch = ({ onChange, className = '' }) => {
  const { lang, setLang } = useI18n()

  const select = (code) => {
    setLang(code)
    if (onChange) onChange(code)
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white p-0.5 text-[11px] uppercase tracking-[0.15em] text-[#755D34] ${className}`}
      role="group"
      aria-label="Dil seçimi"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => select(l.code)}
          className={`px-2.5 py-1 rounded-full transition ${
            lang === l.code
              ? 'bg-[#D4BA7E] text-white'
              : 'text-[#755D34] hover:bg-[#F3E7D3]'
          }`}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}

export default LangSwitch
