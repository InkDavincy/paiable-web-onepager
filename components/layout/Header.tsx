'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLocale = () => {
    setLocale(locale === 'fr-CA' ? 'en-CA' : 'fr-CA')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logos/paiable-logo.svg"
              alt="Paiable"
              width={280}
              height={80}
              className="h-8 w-auto lg:h-16"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-paiable-600 transition-colors font-medium"
            >
              {t('nav.features', 'Fonctionnalités')}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-paiable-600 transition-colors font-medium"
            >
              {t('nav.howItWorks', 'Fonctionnement')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-paiable-600 transition-colors font-medium"
            >
              {t('nav.pricing', 'Prix')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-paiable-600 transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Toggle Langue */}
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <span>{locale === 'fr-CA' ? '🇫🇷' : '🇬🇧'}</span>
              <span>{locale === 'fr-CA' ? 'FR' : 'EN'}</span>
            </button>

            {/* CTA Buttons */}
            <button onClick={() => scrollToSection('pricing')} className="btn-secondary text-sm">
              {t('nav.demo', 'Demander une démo')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="btn-primary text-sm">
              {t('nav.tryFree', 'Essayer gratuitement')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
          >
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-paiable-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t('nav.features', 'Fonctionnalités')}
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-paiable-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t('nav.howItWorks', 'Fonctionnement')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-paiable-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t('nav.pricing', 'Prix')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-paiable-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                FAQ
              </button>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <button
                  onClick={toggleLocale}
                  className="flex items-center space-x-2 px-4 py-2 w-full text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>{locale === 'fr-CA' ? '🇫🇷' : '🇬🇧'}</span>
                  <span className="font-medium">{locale === 'fr-CA' ? 'Français' : 'English'}</span>
                </button>

                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full btn-secondary text-sm"
                >
                  {t('nav.demo', 'Demander une démo')}
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full btn-primary text-sm"
                >
                  {t('nav.tryFree', 'Essayer gratuitement')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
