# 🎨 Guide de Génération des Favicons Paiable

## 📋 Vue d'ensemble

Ce guide explique comment générer automatiquement tous les formats de favicon
nécessaires à partir du logo SVG de Paiable.

## 🔧 Outils utilisés

- **Sharp** : Bibliothèque Node.js pour le traitement d'images
- **Script personnalisé** : `generate-favicons.js` pour automatiser la
  génération

## 📁 Structure des fichiers générés

```
public/
├── favicon.ico                    # Favicon principal (32x32)
├── apple-touch-icon.png          # Icône iOS (180x180)
├── android-chrome-192x192.png    # Android petit (192x192)
├── android-chrome-512x512.png    # Android grand (512x512)
├── mstile-150x150.png            # Windows Metro (150x150)
├── favicon-16x16.png             # Très petit (16x16)
├── favicon-32x32.png             # Standard (32x32)
├── favicon-48x48.png             # Moyen (48x48)
├── favicon-96x96.png             # Grand (96x96)
├── favicon-144x144.png           # Très grand (144x144)
├── favicon-192x192.png           # PWA standard (192x192)
├── favicon-256x256.png           # PWA moyen (256x256)
└── favicon-512x512.png           # PWA grand (512x512)
```

## 🚀 Utilisation

### Génération automatique

```bash
# Méthode 1: Script npm
npm run generate:favicons

# Méthode 2: Node.js direct
node generate-favicons.js
```

### Processus de génération

1. **Lecture du logo source** : `public/logos/paiable-logo.svg`
2. **Conversion en PNG haute résolution** : 512x512 comme base
3. **Redimensionnement** : Génération de toutes les tailles requises
4. **Optimisation** : Compression PNG pour le web
5. **Nettoyage** : Suppression des fichiers temporaires

## 📱 Formats supportés

### Navigateurs web

- `favicon.ico` : Format classique pour tous les navigateurs
- `favicon-16x16.png` : Petite taille pour onglets
- `favicon-32x32.png` : Taille standard

### Mobile et PWA

- `apple-touch-icon.png` : iOS Safari, ajout à l'écran d'accueil
- `android-chrome-*.png` : Android Chrome, PWA
- `favicon-192x192.png` : PWA standard
- `favicon-512x512.png` : PWA haute résolution

### Système d'exploitation

- `mstile-150x150.png` : Windows 10/11 Metro

## ⚙️ Configuration dans Next.js

Les favicons sont automatiquement configurés dans `app/layout.tsx` :

```tsx
export const metadata: Metadata = {
  // ... autres métadonnées
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}
```

## 📄 Web App Manifest

Le fichier `public/site.webmanifest` référence automatiquement les icônes :

```json
{
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 🔄 Mise à jour du logo

Si le logo Paiable est modifié :

1. Remplacez le fichier `public/logos/paiable-logo.svg`
2. Exécutez `npm run generate:favicons`
3. Les nouveaux favicons seront automatiquement générés

## 🛠️ Dépendances requises

```json
{
  "devDependencies": {
    "sharp": "^0.33.0"
  }
}
```

## ✅ Vérification

Après génération, vérifiez que ces fichiers existent dans `public/` :

- ✅ `favicon.ico`
- ✅ `apple-touch-icon.png`
- ✅ `android-chrome-192x192.png`
- ✅ `android-chrome-512x512.png`
- ✅ Tous les `favicon-*x*.png`

## 🌐 Test des favicons

1. **Navigateur** : Vérifiez l'icône dans l'onglet
2. **Mobile** : Ajoutez le site à l'écran d'accueil
3. **PWA** : Installez l'application web
4. **Outils de développement** : Vérifiez les requêtes 404

## 📋 Notes importantes

- **Format source** : Le logo SVG permet une qualité optimale à toutes les
  tailles
- **Compression** : Les PNG sont optimisés pour le web
- **Compatibilité** : Tous les formats modernes sont supportés
- **Performance** : Les fichiers sont légers et optimisés

## 🔍 Débogage

Si les favicons ne s'affichent pas :

1. Vérifiez que les fichiers existent dans `public/`
2. Effacez le cache du navigateur
3. Vérifiez les métadonnées dans `app/layout.tsx`
4. Consultez la console pour les erreurs 404
