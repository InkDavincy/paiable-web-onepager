'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export default function Pricing() {
  const { t } = useI18n()
  const [isAnnual, setIsAnnual] = useState(false)

  // Plans mock - remplace par les vraies données via i18n
  const plans = [
    {
      name: 'Pro',
      description: 'Pour les entreprises en croissance',
      price: isAnnual ? '449' : '500',
      period: 'mois',
      features: [
        "Jusqu'à 1000 factures/mois",
        'Extraction IA avancée',
        "Flux d'approbation personnalisés",
        'Conciliation automatique',
        'Intégrations',
        'Support prioritaire',
        'Rapports avancés',
      ],
      ctaLabel: 'Essayer Pro',
      popular: true,
    },
    {
      name: 'Cabinet',
      description: 'Solution sur mesure pour cabinets',
      price: 'Sur devis',
      period: '',
      features: [
        'Factures illimitées',
        'Multi-clients',
        'API complète',
        'Intégrations personnalisées',
        'Formation dédiée',
        'Support 24/7',
        'SLA garantis',
      ],
      ctaLabel: 'Nous contacter',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-shadow-paiable">
            Choisissez le plan qui vous convient
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Commencez gratuitement et évoluez selon vos besoins. Tous les plans incluent la
            conformité canadienne.
          </p>

          {/* Toggle Mensuel/Annuel */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-lg font-medium ${!isAnnual ? 'text-paiable-600' : 'text-muted-foreground'}`}
            >
              Mensuel
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-paiable-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-paiable-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium ${isAnnual ? 'text-paiable-600' : 'text-muted-foreground'}`}
            >
              Annuel
              <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                -20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Grille des plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular
                  ? 'border-paiable-500 transform scale-105'
                  : 'border-gray-100 hover:border-paiable-300'
              } transition-all duration-300`}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-paiable-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}

              {/* En-tête du plan */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.price === 'Sur devis' ? (
                    <div className="text-3xl font-bold text-foreground">Sur devis</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-xl text-muted-foreground ml-2">$ CAD</span>
                      <span className="text-muted-foreground ml-1">/{plan.period}</span>
                    </div>
                  )}
                  {isAnnual && plan.price !== 'Sur devis' && (
                    <p className="text-sm text-green-600 mt-2">
                      Économisez {Math.round(parseInt(plan.price) * 0.2 * 12)}$ par année
                    </p>
                  )}
                </div>
              </div>

              {/* Fonctionnalités */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-paiable-500 hover:bg-paiable-600 text-white'
                    : 'bg-white hover:bg-paiable-50 text-paiable-600 border border-paiable-300'
                }`}
              >
                {plan.ctaLabel}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Section de confiance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-muted-foreground mb-6">
            Essai gratuit de 14 jours • Aucune carte de crédit requise • Support en français et
            anglais
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm">SSL 256-bit</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🇨🇦</span>
              <span className="text-sm">Hébergé au Canada</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">Loi 25 compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
