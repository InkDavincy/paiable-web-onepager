'use client'

import { createContext, useContext, useState, useEffect } from 'react'

// Types
export type Locale = 'fr-CA' | 'en-CA'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, defaultValue?: string) => string
}

interface I18nProviderProps {
  children: React.ReactNode
  defaultLocale?: Locale
}

// Contexte
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Hook personnalisé
export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    // Fallback simple pour éviter les erreurs pendant le développement
    return {
      locale: 'fr-CA' as Locale,
      setLocale: () => {},
      t: (key: string, defaultValue = key) => defaultValue,
    }
  }
  return context
}

// Cache pour les traductions
const translationCache: Record<string, Record<string, string>> = {}

// Fonction pour charger les traductions
async function loadTranslations(locale: Locale): Promise<Record<string, string>> {
  if (translationCache[locale]) {
    return translationCache[locale]
  }

  try {
    // Charger tous les fichiers de traduction pour cette locale
    const [common, features, pricing, faq] = await Promise.all([
      import(`@/content/common.${locale}.json`).then(m => m.default).catch(() => ({})),
      import(`@/content/features.${locale}.json`).then(m => m.default).catch(() => ({})),
      import(`@/content/pricing.${locale}.json`).then(m => m.default).catch(() => ({})),
      import(`@/content/faq.${locale}.json`).then(m => m.default).catch(() => ({})),
    ])

    // Fusionner toutes les traductions
    const translations = {
      ...common,
      ...features,
      ...pricing,
      ...faq,
    }

    translationCache[locale] = translations
    return translations
  } catch (error) {
    console.warn(`Failed to load translations for ${locale}:`, error)
    return {}
  }
}

// Fonction utilitaire pour obtenir une valeur imbriquée
function getNestedValue(obj: Record<string, any>, path: string): string | undefined {
  const result = path.split('.').reduce((current, key) => current?.[key], obj)
  return typeof result === 'string' ? result : undefined
}

// Provider
export function I18nProvider({ children, defaultLocale = 'fr-CA' }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [translations, setTranslations] = useState<Record<string, string>>({})

  // Fonction pour changer la locale
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('paiable-locale', newLocale)
  }

  // Fonction de traduction
  const t = (key: string, defaultValue = key): string => {
    const value = getNestedValue(translations, key) || translations[key]
    return value || defaultValue
  }

  // Effet pour charger les traductions
  useEffect(() => {
    loadTranslations(locale).then(setTranslations)
  }, [locale])

  // Effet pour récupérer la locale sauvegardée
  useEffect(() => {
    const savedLocale = localStorage.getItem('paiable-locale') as Locale
    if (savedLocale && ['fr-CA', 'en-CA'].includes(savedLocale)) {
      setLocaleState(savedLocale)
    }
  }, [])

  const value = {
    locale,
    setLocale,
    t,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// Fonction utilitaire pour obtenir la langue pour les meta tags
export function getLanguageCode(locale: Locale): string {
  return locale.split('-')[0] // 'fr-CA' -> 'fr'
}

// Constantes
export const LOCALES: Locale[] = ['fr-CA', 'en-CA']
export const DEFAULT_LOCALE: Locale = 'fr-CA'
export const FALLBACK_LOCALE: Locale = 'en-CA'
