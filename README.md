# Paiable One-pager 🚀

> Site web one-pager pour Paiable - Automatisez vos factures. Accélérez vos
> paiements.

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Azure](https://img.shields.io/badge/Deployed%20on-Azure-0078D4?style=flat&logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/)

## ✨ Fonctionnalités

- 🎨 **Design moderne** avec Tailwind CSS et thème clair par défaut
- 🌐 **i18n complet** (fr-CA/en-CA) avec toggle dans le header
- 🚀 **Performance optimisée** avec Next.js 16 + Turbopack
- 📱 **Responsive design** pour tous les appareils
- ♿ **Accessibilité** avec navigation clavier et screen readers
- 🔒 **Sécurité** avec headers de sécurité et conformité Loi 25/PIPEDA
- 📊 **Analytics prêts** (GA4/GTM scaffoldés mais désactivés)
- 🐳 **Docker** avec NGINX reverse proxy pour la production
- ⚡ **Animations fluides** avec Framer Motion
- 🔍 **SEO optimisé** avec meta tags, Open Graph, et sitemap

## 🏗️ Architecture technique

```
paiable-onepager/
├── app/                          # App Router Next.js 16
│   ├── layout.tsx               # Layout principal avec analytics
│   ├── page.tsx                 # Page d'accueil (one-pager)
│   ├── globals.css              # Styles globaux + Tailwind
│   ├── robots.ts                # Configuration robots.txt
│   └── sitemap.ts               # Génération automatique du sitemap
├── components/
│   ├── layout/                  # Composants layout
│   │   ├── Header.tsx           # Header avec navigation + toggle i18n
│   │   └── Footer.tsx           # Footer avec liens
│   ├── ui/                      # Composants UI réutilisables
│   │   └── PageBackground.tsx   # Fond animé avec motifs doux
│   └── sections/                # Sections du one-pager
│       ├── Hero.tsx             # Hero avec CTA
│       ├── Features.tsx         # 4 fonctionnalités principales
│       ├── CanadianProtection.tsx # Bloc conformité canadienne
│       ├── HowItWorks.tsx       # 3 étapes de fonctionnement
│       ├── Pricing.tsx          # Plans avec toggle mensuel/annuel
│       └── FAQ.tsx              # FAQ accordéon
├── content/                     # Fichiers de traduction JSON
│   ├── common.{fr-CA,en-CA}.json
│   ├── features.{fr-CA,en-CA}.json
│   ├── pricing.{fr-CA,en-CA}.json
│   └── faq.{fr-CA,en-CA}.json
├── lib/                         # Utilitaires et configuration
│   ├── i18n.tsx                 # Système i18n avec Context API
│   └── analytics.tsx            # Provider GA4/GTM (désactivé par défaut)
├── public/                      # Assets statiques
│   ├── logos/                   # Logos Paiable (SVG/PNG)
│   └── og/                      # Images Open Graph
└── .github/workflows/           # CI/CD Azure
    └── azure-deploy.yml         # Pipeline GitHub Actions → ACR → Web App
```

## 🚀 Démarrage rapide

### Prérequis

- **Node.js 18+** avec npm
- **Git** pour le versioning

### Installation

```bash
# 1. Cloner le projet
git clone <votre-repo>
cd paiable-onepager

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement (optionnel)
cp .env.example .env.local

# 4. Démarrer en mode développement avec Turbopack
npm run dev
```

L'application sera disponible sur **http://localhost:3000**

### Variables d'environnement

Créez un fichier `.env.local` avec :

```bash
# Localisation (obligatoire)
NEXT_PUBLIC_DEFAULT_LOCALE=fr-CA
NEXT_PUBLIC_FALLBACK_LOCALE=en-CA
NEXT_PUBLIC_SITE_URL=https://paiable.ca

# Analytics (optionnel - laissez vide pour désactiver)
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=

# Azure (production uniquement)
ACR_NAME=your-container-registry
RESOURCE_GROUP=your-resource-group
WEBAPP_NAME=your-webapp-name
```

## 🛠️ Scripts disponibles

```bash
# Développement
npm run dev          # Démarrer avec Turbopack (recommandé)
npm run dev:regular  # Démarrer sans Turbopack

# Build et déploiement
npm run build        # Build de production (output: standalone)
npm run start        # Servir le build de production
npm run export       # Export statique (optionnel)

# Qualité de code
npm run lint         # ESLint + TypeScript check
npm run lint:fix     # Auto-fix des erreurs ESLint
npm run format       # Prettier pour formater le code
npm run type-check   # Vérification TypeScript uniquement

# Docker
npm run docker:build    # Build de l'image Docker
npm run docker:run      # Run du container localement
```

## 🐳 Déploiement Docker

### Développement local avec Docker

```bash
# Build et run avec docker-compose
docker-compose up --build

# Ou manuellement
docker build -t paiable-onepager .
docker run -p 80:80 -p 3000:3000 paiable-onepager
```

L'app sera accessible sur **http://localhost** (NGINX) et
**http://localhost:3000** (Next.js direct).

### Architecture Docker

- **Stage 1** : Build de l'app Next.js avec optimisations
- **Stage 2** : Runtime avec NGINX 1.29.3 + Node.js
- **Reverse proxy** : NGINX devant Next.js pour les performances
- **Health checks** : `/health` endpoint pour monitoring

## ☁️ Déploiement Azure

### 1. Prérequis Azure

```bash
# Créer les ressources Azure (CLI)
az group create --name rg-paiable --location "Canada Central"

# Container Registry
az acr create --resource-group rg-paiable --name paiableacr --sku Basic

# Web App for Containers
az appservice plan create --name asp-paiable --resource-group rg-paiable --sku B1 --is-linux
az webapp create --resource-group rg-paiable --plan asp-paiable --name paiable-webapp --deployment-container-image-name nginx
```

### 2. Configuration des secrets GitHub

Dans **Settings > Secrets and variables > Actions**, ajoutez :

```bash
# Azure Container Registry
ACR_USERNAME=<service-principal-id>
ACR_PASSWORD=<service-principal-password>

# Azure Web App (format JSON)
AZURE_CREDENTIALS={
  "clientId": "<service-principal-id>",
  "clientSecret": "<service-principal-password>",
  "subscriptionId": "<azure-subscription-id>",
  "tenantId": "<azure-tenant-id>"
}
```

### 3. Configuration du workflow

Modifiez `.github/workflows/azure-deploy.yml` :

```yaml
env:
  REGISTRY_NAME: 'paiableacr' # Votre ACR
  RESOURCE_GROUP: 'rg-paiable' # Votre RG
  APP_NAME: 'paiable-webapp' # Votre Web App
```

### 4. Déploiement automatique

- **Push sur `main`** → Déploie sur staging
- **Push sur `production`** → Déploie en production
- **Pull requests** → Build et tests uniquement

## 🌐 Internationalisation (i18n)

### Structure des traductions

```typescript
// content/common.fr-CA.json
{
  "nav": {
    "features": "Fonctionnalités",
    "pricing": "Prix"
  },
  "hero": {
    "title": "Automatisez vos factures...",
    "subtitle": "Paiable centralise..."
  }
}
```

### Utilisation dans les composants

```tsx
import { useI18n } from '@/lib/i18n'

export default function MyComponent() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div>
      <h1>{t('hero.title', 'Fallback text')}</h1>
      <button onClick={() => setLocale('en-CA')}>Switch to English</button>
    </div>
  )
}
```

### Ajouter une nouvelle langue

1. Créer les fichiers JSON dans `content/`
2. Ajouter la locale dans `lib/i18n.tsx`
3. Mettre à jour le toggle dans `Header.tsx`

## 📊 Analytics et tracking

Le système supporte **Google Analytics 4** et **Google Tag Manager** :

```tsx
// Tracking d'événements personnalisés
import { trackEvent, trackConversion } from '@/lib/analytics'

// Event tracking
trackEvent('button_click', {
  button_name: 'cta_pricing',
  section: 'hero',
})

// Conversion tracking
trackConversion('AW-CONVERSION-ID', 149.99, 'CAD')
```

**Note** : Analytics désactivés par défaut. Renseignez `NEXT_PUBLIC_GA4_ID` ou
`NEXT_PUBLIC_GTM_ID` pour activer.

## 🎨 Système de design

### Couleurs principales

```css
:root {
  --paiable-blue: #0ea5e9; /* Couleur principale du logo */
  --background: #f8fafc; /* Fond clair (slate-50) */
  --foreground: #334155; /* Texte principal (slate-700) */
  --border: #e2e8f0; /* Bordures (slate-200) */
  --muted: #f1f5f9; /* Fond atténué (slate-100) */
  --muted-foreground: #64748b; /* Texte atténué (slate-500) */
}
```

### Classes utilitaires personnalisées

```css
.btn-primary    /* Bouton principal bleu Paiable */
.btn-secondary  /* Bouton secondaire contour */
.card           /* Carte avec ombre et hover */
.section-container /* Container responsive max-w-7xl */
.section-spacing   /* Padding vertical cohérent */
```

### Animations

- **Fade up** : Entrée en douceur avec `framer-motion`
- **Hover effects** : Scale et couleurs sur les cartes
- **Float** : Animation flottante pour les éléments décoratifs
- **Performance optimisée** : `will-change` et GPU acceleration

## 🔧 Développement et contribution

### Structure des composants

```tsx
// Template de composant avec i18n et animations
'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export default function MySection() {
  const { t } = useI18n()

  return (
    <section id="my-section" className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            {t('section.title', 'Default title')}
          </h2>
          {/* Contenu */}
        </motion.div>
      </div>
    </section>
  )
}
```

### Guidelines de code

- **TypeScript strict** pour la type safety
- **ESLint + Prettier** avec pre-commit hooks
- **Conventional Commits** pour les messages de commit
- **Mobile-first** responsive design
- **Accessibilité** avec semantic HTML et ARIA

### Tests et qualité

```bash
# Linting et formatting
npm run lint      # Vérifications ESLint + TypeScript
npm run format    # Auto-formatting avec Prettier

# Pre-commit automatique avec Husky
git add .
git commit -m "feat: add new pricing section"
# → Husky executera lint-staged automatiquement
```

## 🚨 Résolution des problèmes

### Erreurs communes

**1. Build errors avec Tailwind**

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

**2. TypeScript errors avec Next.js 16**

```bash
npm install -D @types/node@latest @types/react@latest
```

**3. Framer Motion performance**

```tsx
// Utilisez will-change avec parcimonie
<motion.div style={{ willChange: 'transform' }}>
```

**4. Docker build slow**

```bash
# Ajoutez .dockerignore avec node_modules, .next, etc.
echo "node_modules\n.next\n.git" > .dockerignore
```

### Debug mode

```bash
# Next.js debug
DEBUG=* npm run dev

# Docker logs
docker-compose logs -f paiable-web

# Azure logs
az webapp log tail --name paiable-webapp --resource-group rg-paiable
```

## 📋 TODO / Roadmap

- [ ] Tests unitaires avec Jest + React Testing Library
- [ ] Tests E2E avec Playwright
- [ ] Lighthouse CI pour les performances
- [ ] Monitoring avec Application Insights
- [ ] CDN Azure pour les assets statiques
- [ ] Service Worker pour la mise en cache
- [ ] Dark mode toggle
- [ ] Animations plus poussées (page transitions)

## 📝 Licence

Propriétaire - Tous droits réservés à **Paiable**

## 🤝 Support

Pour toute question ou support :

- 📧 **Email** : dev@paiable.ca
- 🐛 **Issues** : [GitHub Issues](./issues)
- 📖 **Documentation** : Ce README + commentaires dans le code

---

**Fait avec ❤️ au Canada par l'équipe Paiable**

🇨🇦 **Hébergé au Canada • Conforme Loi 25 & PIPEDA • Données sécurisées**
