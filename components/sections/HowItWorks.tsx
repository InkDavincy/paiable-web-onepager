'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export default function HowItWorks() {
  const { t } = useI18n()

  const steps: Array<{
    number: number
    title: string
    description: string
    detailedDescription?: string
    benefits: string[]
    icon: React.ReactNode
  }> = [
    {
      number: 1,
      title: 'Importez vos factures',
      description: 'Glissez-déposez vos PDF, connectez votre email ou utilisez notre app mobile.',
      detailedDescription:
        "L'IA extrait automatiquement toutes les données avec 99% de précision et détecte les doublons.",
      benefits: ['90% de temps économisé', 'Zéro erreur de saisie', 'Conformité automatique'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Validez & approuvez',
      description:
        "Vérifiez les données extraites, définissez vos règles d'approbation intelligentes et programmez les paiements. Catégorisation automatique par projet et code d'activité.",
      detailedDescription:
        "Automatisez complètement votre processus d'approbation avec des workflows intelligents et des notifications contextuelles.",
      benefits: ['Processus 5x plus rapide', 'Traçabilité complète', 'Notifications intelligentes'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Analysez & optimisez',
      description:
        'Visualisez vos dépenses en temps réel, identifiez les tendances et exportez des rapports personnalisés. Prévisions IA et insights exploitables pour optimiser vos budgets.',
      detailedDescription:
        'Transformez vos données financières en insights stratégiques avec nos tableaux de bord interactifs et notre IA prédictive.',
      benefits: ['Visibilité en temps réel', 'Prévisions précises', 'Optimisation des coûts'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-shadow-paiable">
            Une solution complète pour votre gestion financière
          </h2>
          <p className="text-xl text-muted-foreground">
            Simplifiez votre flux de travail en trois étapes faciles.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${index !== steps.length - 1 ? 'mb-10' : ''}`}
            >
              {step.number === 1 ? (
                /* Carte avec effet flip complet pour l'étape 1 */
                <div className="relative [perspective:1000px] group">
                  <div className="relative w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Face avant normale */}
                    <div className="bg-white/50 border border-gray-200 rounded-2xl p-8 lg:p-12 backdrop-blur-sm shadow-lg flex flex-col lg:flex-row items-center gap-8 lg:gap-16 [backface-visibility:hidden]">
                      <div className="flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          <div className="w-12 h-12 bg-paiable-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            {step.number}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="w-64 h-64 bg-gradient-to-br from-paiable-50 to-paiable-100 rounded-2xl flex items-center justify-center text-paiable-600 border border-paiable-200">
                          <div className="transform scale-150">{step.icon}</div>
                        </div>
                      </div>
                    </div>

                    {/* Face arrière avec ligne lumineuse */}
                    <div className="absolute inset-0 bg-gradient-to-br from-paiable-800 to-paiable-900 rounded-2xl p-8 lg:p-12 shadow-lg flex flex-col justify-center items-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                      {/* Ligne de contour - boîte dans une boîte intensifiée */}
                      <div className="absolute inset-4 rounded-xl border-2 border-paiable-mint shadow-[0_0_15px_rgba(14,165,233,0.6)]">
                        <div className="absolute inset-0 rounded-xl border-2 border-paiable-mint-dark shadow-[0_0_25px_rgba(14,165,233,0.8)] animate-[pulse_0.7s_ease-in-out_infinite]"></div>
                      </div>
                      {/* Contenu par-dessus l'effet */}
                      <div className="relative z-10 text-center space-y-6 max-w-lg">
                        <h3 className="text-2xl lg:text-3xl font-bold text-paiable-100">
                          {step.title}
                        </h3>
                        <p className="text-lg text-paiable-200 leading-relaxed">
                          {step.detailedDescription}
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {step.benefits?.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="text-sm bg-white/20 text-white px-4 py-2 rounded-full border border-white/30 font-medium backdrop-blur-sm"
                            >
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Cartes avec effet flip pour étapes 2 et 3 */
                <div className="relative [perspective:1000px] group">
                  <div className="relative w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Face avant normale */}
                    <div
                      className={`bg-white/50 border border-gray-200 rounded-2xl p-8 lg:p-12 backdrop-blur-sm shadow-lg flex flex-col lg:flex-row items-center gap-8 lg:gap-16 [backface-visibility:hidden] ${
                        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          <div className="w-12 h-12 bg-paiable-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            {step.number}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="w-64 h-64 bg-gradient-to-br from-paiable-50 to-paiable-100 rounded-2xl flex items-center justify-center text-paiable-600 border border-paiable-200">
                          <div className="transform scale-150">{step.icon}</div>
                        </div>
                      </div>
                    </div>

                    {/* Face arrière avec ligne lumineuse */}
                    <div className="absolute inset-0 bg-gradient-to-br from-paiable-800 to-paiable-900 rounded-2xl p-8 lg:p-12 shadow-lg flex flex-col justify-center items-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                      {/* Ligne de contour - boîte dans une boîte intensifiée */}
                      <div className="absolute inset-4 rounded-xl border-2 border-paiable-mint shadow-[0_0_15px_rgba(14,165,233,0.6)]">
                        <div className="absolute inset-0 rounded-xl border-2 border-paiable-mint-dark shadow-[0_0_25px_rgba(14,165,233,0.8)] animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                      </div>
                      {/* Contenu par-dessus l'effet */}
                      <div className="relative z-10 text-center space-y-6 max-w-lg">
                        <h3 className="text-2xl lg:text-3xl font-bold text-paiable-100">
                          {step.number === 1
                            ? 'Automatisez complètement votre processus de facturation avec notre IA avancée.'
                            : step.number === 2
                              ? 'Suivez les dépenses et identifiez les tendances et optimisez vos budgets.'
                              : step.number === 3
                                ? 'Nos tableaux de bord vous donnent une vue à 360° de vos finances en temps réel.'
                                : step.title}
                        </h3>
                        <p className="text-lg text-paiable-200 leading-relaxed">
                          {step.detailedDescription || step.description}
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {step.benefits?.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="text-sm bg-white/20 text-white px-4 py-2 rounded-full border border-white/30 font-medium backdrop-blur-sm"
                            >
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">Commencer gratuitement</button>
          <p className="text-sm text-muted-foreground mt-4">
            Aucune carte de crédit requise • Essai gratuit de 14 jours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
