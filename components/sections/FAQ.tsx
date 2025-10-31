'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export default function FAQ() {
  const { t } = useI18n()
  const [openItems, setOpenItems] = useState<number[]>([])

  // FAQ mock data - replace with i18n data
  const faqs = [
    {
      question: "Paiable s'intègre-t-il avec QuickBooks et d'autres logiciels comptables ?",
      answer:
        "Oui ! Paiable s'intègre nativement avec QuickBooks, Sage, et d'autres logiciels comptables populaires. Nous ajoutons régulièrement de nouvelles intégrations selon les demandes de nos clients. Des connecteurs Zapier et une API complète sont également disponibles pour des intégrations personnalisées.",
    },
    {
      question: 'Comment Paiable assure-t-il la conformité avec la Loi 25 et PIPEDA ?',
      answer:
        "Toutes vos données sont hébergées exclusivement au Canada dans des centres de données certifiés SOC 2. Nous appliquons un chiffrement de bout en bout (AES-256), des contrôles d'accès stricts, et suivons toutes les exigences de la Loi 25 du Québec et du PIPEDA fédéral.",
    },
    {
      question: 'Puis-je exporter mes données si je change de solution ?',
      answer:
        'Absolument ! Paiable vous donne un contrôle total sur vos données. Vous pouvez exporter toutes vos factures, historiques de paiements, et rapports en formats standard (CSV, PDF, JSON) à tout moment.',
    },
    {
      question: 'Y a-t-il un essai gratuit disponible ?',
      answer:
        'Oui ! Nous offrons un essai gratuit de 14 jours sans carte de crédit requise. Cela vous donne accès à toutes les fonctionnalités du plan Pro pour que vous puissiez tester Paiable avec vos vraies factures.',
    },
    {
      question: "Quelle est la précision de l'extraction IA des factures ?",
      answer:
        "Notre moteur d'IA atteint une précision moyenne de 99% pour l'extraction des champs principaux (montant, date, fournisseur, numéro de facture). Le système apprend constamment et s'améliore avec le temps.",
    },
    {
      question: 'Quel niveau de support client proposez-vous ?',
      answer:
        "Nous offrons un support par email pour tous les plans, avec un temps de réponse de 24h. Les clients Pro bénéficient d'un support prioritaire (4h). Les clients Cabinet ont accès à un support téléphonique dédié et à un gestionnaire de compte.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]
    )
  }

  return (
    <section id="faq" className="section-spacing bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Questions fréquemment posées
          </h2>
          <p className="text-xl text-muted-foreground">
            Trouvez rapidement les réponses à vos questions sur Paiable.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-paiable-600 transition-colors"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-foreground pr-8">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(index) ? 'auto' : 0,
                  opacity: openItems.includes(index) ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-6 pr-8">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-paiable-50 to-blue-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Sécurisez vos paiements avec Paiable
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises canadiennes qui font confiance à Paiable pour automatiser
            leurs processus de paiement en toute sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">Commencer gratuitement</button>
            <button className="btn-secondary text-lg px-8 py-4">Planifier une démo</button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Essai gratuit de 14 jours • Aucune carte de crédit requise • Support en français
          </p>
        </motion.div>
      </div>
    </section>
  )
}
