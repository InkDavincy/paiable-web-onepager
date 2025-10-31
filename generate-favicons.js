const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function generateFavicons() {
  const logoPath = path.join(__dirname, 'public/logos/paiable-logo.svg')
  const publicDir = path.join(__dirname, 'public')

  console.log('🚀 Génération des favicons à partir du logo Paiable...')

  try {
    // Lire le fichier SVG et créer une version optimisée pour le favicon
    const svgBuffer = fs.readFileSync(logoPath)

    // Créer une version PNG haute résolution comme base
    const basePng = await sharp(svgBuffer).resize(512, 512).png().toBuffer()

    // Générer favicon.ico (utilisation d'un PNG 32x32 renommé temporairement)
    console.log('📦 Génération de favicon.ico...')
    await sharp(basePng).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32-temp.png'))

    // Copier le PNG 32x32 comme favicon.ico (compatible avec la plupart des navigateurs)
    fs.copyFileSync(
      path.join(publicDir, 'favicon-32x32-temp.png'),
      path.join(publicDir, 'favicon.ico')
    )
    fs.unlinkSync(path.join(publicDir, 'favicon-32x32-temp.png'))

    // Générer les PNG pour différentes tailles
    const sizes = [16, 32, 48, 96, 144, 192, 256, 512]

    for (const size of sizes) {
      console.log(`📱 Génération de favicon-${size}x${size}.png...`)
      await sharp(basePng)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, `favicon-${size}x${size}.png`))
    }

    // Générer apple-touch-icon.png (180x180 pour iOS)
    console.log('🍎 Génération de apple-touch-icon.png...')
    await sharp(basePng).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'))

    // Générer android-chrome icons
    console.log('🤖 Génération des icônes Android...')
    await sharp(basePng)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'))

    await sharp(basePng)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-512x512.png'))

    // Générer mstile pour Windows
    console.log('🪟 Génération de mstile-150x150.png...')
    await sharp(basePng).resize(150, 150).png().toFile(path.join(publicDir, 'mstile-150x150.png'))

    // Supprimer le placeholder
    const placeholderPath = path.join(publicDir, 'favicon-placeholder.txt')
    if (fs.existsSync(placeholderPath)) {
      fs.unlinkSync(placeholderPath)
      console.log('🗑️ Suppression du placeholder favicon')
    }

    console.log('✅ Tous les favicons ont été générés avec succès !')
    console.log('\nFichiers créés :')
    console.log('- favicon.ico (32x32)')
    console.log('- apple-touch-icon.png (180x180)')
    console.log('- android-chrome-192x192.png')
    console.log('- android-chrome-512x512.png')
    console.log('- mstile-150x150.png')
    sizes.forEach(size => console.log(`- favicon-${size}x${size}.png`))
  } catch (error) {
    console.error('❌ Erreur lors de la génération des favicons :', error)
  }
}

// Exécuter la génération
generateFavicons()
