import React, { useMemo, useState } from 'react'
import SectionTitle from './SectionTitle'
import { menuCategories } from '../data/menu'
import searchIcon from '../assets/search-icon.svg'
import { useI18n } from '../i18n/i18n'

const MenuSection = () => {
  const [query, setQuery] = useState('')
  const firstCat = menuCategories[0]?.id || ''
  const [activeCat, setActiveCat] = useState(firstCat)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menuCategories
      .filter((cat) => {
        if (!activeCat) return true
        return cat.id === activeCat
      })
      .map((cat) => {
        const indexedItems = cat.items.map((item, idx) => ({ ...item, __index: idx }))
        return {
          ...cat,
          items: indexedItems.filter((it) => {
            if (!q) return true
            const name = (it.name || '').toLowerCase()
            const desc = (it.description || '').toLowerCase()
            return name.includes(q) || desc.includes(q)
          }),
        }
      })
      .filter((cat) => cat.items.length > 0)
  }, [query, activeCat])

  const { t } = useI18n()
  const slugify = (s = '') =>
    s
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

  const translateGroup = (label) => {
    if (!label) return ''
    const translated = t(`menu.groups.${slugify(label)}`)
    if (typeof translated === 'string' && !translated.startsWith('menu.groups.')) return translated
    return label
  }

  const createGroupSections = (items = []) => {
    const sections = []
    const buckets = new Map()
    items.forEach((item) => {
      const key = item.group || '__default'
      if (!buckets.has(key)) {
        const entry = { key, group: item.group, items: [] }
        buckets.set(key, entry)
        sections.push(entry)
      }
      buckets.get(key).items.push(item)
    })
    return sections
  }
  return (
    <section id="menu" className="section-padding bg-[#f7f5ef]">
      <div className="container-layout">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow={t('menu.eyebrow')} title={t('menu.title')} />
          <p className="max-w-md text-sm leading-relaxed text-textMuted">{t('menu.description')}</p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-[minmax(32rem,1fr),auto] md:items-center">
          <div className="relative md:col-span-2 max-w-none">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('menu.searchPlaceholder')}
              aria-label={t('menu.searchAria')}
              className="w-full rounded-2xl border border-[rgba(212,186,126,0.3)] bg-lightBg/70 px-4 pr-10 py-3 text-sm outline-none ring-[rgba(212,186,126,0.4)] transition focus:ring-2"
            />
            <img
              src={searchIcon}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-70"
            />
          </div>
          <div className="-mx-1 flex flex-wrap gap-2 px-1 py-1 justify-center md:col-span-2 md:justify-center">
            {menuCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition min-h-[44px] tap-scale ${
                  activeCat === c.id
                    ? 'bg-primaryBg text-lightBg'
                    : 'bg-cardBg text-textMain hover:bg-primaryBg/10'
                }`}
              >
                {t(`menu.cats.${c.id}`) || c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-12">
          {filtered.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg text-textMain">
                  {t(`menu.cats.${category.id}`) || category.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-textMuted">
                  {category.items.length} {t('menu.itemWord')}
                </span>
              </div>
              <div className="space-y-6">
                {createGroupSections(category.items).map((section) => (
                  <div key={`${category.id}-${section.key}`} className="space-y-3">
                    {section.group && (
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-textMuted">
                        {translateGroup(section.group)}
                      </div>
                    )}
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {section.items.map((item) => {
                        const itemIndex = item.__index ?? 0
                        const title = (() => {
                          const key = slugify(item.name)
                          const bySlug = t(`menu.items.${key}.name`)
                          if (typeof bySlug === 'string' && !bySlug.startsWith('menu.items.')) return bySlug
                          const byIndex = t(`menu.itemsByIndex.${category.id}.${itemIndex}.name`)
                          if (typeof byIndex === 'string' && !byIndex.startsWith('menu.itemsByIndex.')) return byIndex
                          return item.name
                        })()
                        const desc = (() => {
                          if (!item.description) return ''
                          const key = slugify(item.name)
                          const bySlug = t(`menu.items.${key}.desc`)
                          if (typeof bySlug === 'string' && !bySlug.startsWith('menu.items.')) return bySlug
                          const byIndex = t(`menu.itemsByIndex.${category.id}.${itemIndex}.desc`)
                          if (typeof byIndex === 'string' && !byIndex.startsWith('menu.itemsByIndex.')) return byIndex
                          return item.description
                        })()
                        return (
                          <div
                            key={`${item.name}-${itemIndex}`}
                            className="flex h-full flex-col rounded-2xl border border-[rgba(212,186,126,0.15)] bg-cardBg/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                          >
                            <div className="w-full overflow-hidden rounded-xl bg-lightBg">
                              <div className="relative w-full pb-[70%]">
                                <img
                                  src={item.image || ''}
                                  alt={title}
                                  className="absolute inset-0 h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div className="mt-3 flex items-start justify-between gap-3">
                              <p className="text-sm font-semibold text-textMain sm:text-base">{title}</p>
                              <p className="whitespace-nowrap text-sm text-[#755D34]">{item.price}</p>
                            </div>
                            {desc && <p className="mt-1 text-xs text-textMuted sm:text-sm">{desc}</p>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-textMuted">{t('menu.note')}</p>
      </div>
    </section>
  )
}

export default MenuSection
