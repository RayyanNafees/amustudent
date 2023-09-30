// uno.config.ts
import { defineConfig, presetWebFonts,presetUno  } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      // use axios with an https proxy
      //customFetch: (url: string) => fetch(url, { httpsAgent: new ProxyAgent('https://localhost:7890') }).then(it => it.json()),
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
})