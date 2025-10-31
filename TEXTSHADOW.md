# Text Shadow Utilities - Paiable

## Classes disponibles

### Ombres standards

- `text-shadow-sm` - Ombre légère : `0 1px 2px rgba(0, 0, 0, 0.05)`
- `text-shadow` ou `text-shadow-DEFAULT` - Ombre par défaut :
  `0 2px 4px rgba(0, 0, 0, 0.1)`
- `text-shadow-md` - Ombre moyenne : `0 4px 8px rgba(0, 0, 0, 0.12)`
- `text-shadow-lg` - Ombre large : `0 8px 16px rgba(0, 0, 0, 0.15)`
- `text-shadow-xl` - Ombre extra large : `0 16px 32px rgba(0, 0, 0, 0.20)`
- `text-shadow-none` - Pas d'ombre

### Ombre de marque Paiable

- `text-shadow-paiable` - Ombre bleue Paiable :
  `0 2px 4px rgba(2, 132, 199, 0.3)`

## Exemples d'usage

```tsx
// Titre avec ombre Paiable
<h1 className="text-4xl font-bold text-paiable-950 text-shadow-paiable">
  Mon Titre
</h1>

// Texte avec ombre subtile
<p className="text-lg text-shadow-sm">
  Texte avec ombre légère
</p>

// Titre important avec grande ombre
<h2 className="text-3xl font-bold text-shadow-lg">
  Titre Important
</h2>

// Supprimer l'ombre
<span className="text-shadow-none">
  Texte sans ombre
</span>
```

## Configuration

Les valeurs sont définies dans `tailwind.config.ts` dans la section `textShadow`
et le plugin génère automatiquement toutes les classes.

Pour ajouter de nouvelles valeurs, modifiez la section `textShadow` dans le
fichier de configuration.
