import { defineConfig, presetUno, presetTypography, presetWebFonts  } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetTypography(),
        presetWebFonts({
            provider: 'google',
            fonts: {
              sans: 'Inter:400,500,600,700',
              headings: 'Syne:700',
            },
          }),
      ],
})