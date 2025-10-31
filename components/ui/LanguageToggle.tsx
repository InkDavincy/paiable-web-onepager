'use client'

import { Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { motion, AnimatePresence } from 'framer-motion'

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'fr-CA', label: 'Français (CA)', flag: '🇨🇦' },
    { code: 'en-CA', label: 'English (CA)', flag: '🇨🇦' },
  ]

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
      >
        <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLanguage?.flag} {currentLanguage?.label.split(' ')[0]}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 min-w-[180px] z-50"
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code as 'fr-CA' | 'en-CA')
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-3 ${
                  locale === lang.code
                    ? 'text-paiable-600 dark:text-paiable-400 bg-paiable-50 dark:bg-paiable-900/20'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <span className="ml-auto text-paiable-600 dark:text-paiable-400">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay pour fermer le dropdown */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
