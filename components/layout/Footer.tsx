'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()

  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white/10 border-t border-gray-100">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo et description */}
          <div className="md:col-span-2 flex flex-col items-center text-center md:text-left">
            <Link href="/" onClick={scrollToTop} className="flex items-center space-x-3 mb-8">
              <Image
                src="/logos/paiable-logo.svg"
                alt="Paiable"
                width={280}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-center text-shadow-sm text-muted-foreground mb-8 max-w-md">
              {t(
                'footer.description',
                'Automatisez vos factures et accélérez vos paiements avec une conformité canadienne complète. Hébergement sécurisé au Canada.'
              )}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{t('footer.hosted', 'Hébergé au Canada')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-paiable-500 rounded-full"></span>
                <span>{t('footer.compliant', 'Conforme Loi 25')}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t('footer.navigation', 'Navigation')}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  {t('nav.features', 'Fonctionnalités')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  {t('nav.howItWorks', 'Fonctionnement')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  {t('nav.pricing', 'Prix')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t('footer.legal', 'Légal & Contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  {t('footer.privacy', 'Confidentialité')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  {t('footer.terms', 'Conditions')}
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  {t('footer.security', 'Sécurité')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-paiable-600 transition-colors"
                >
                  {t('footer.contact', 'Contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Paiable. {t('footer.rights', 'Tous droits réservés.')}{' '}
            <span className="hidden sm:inline">
              {t('footer.madeInCanada', 'Conçu et développé au Canada.')}
            </span>
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-paiable-600 transition-colors group"
          >
            <span>{t('footer.backToTop', 'Retour en haut')}</span>
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
