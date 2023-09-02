import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
  ssr: false,
  modules: ["nuxt-quasar-ui"],
  quasar: {
    sassVariables: true,
  },
});
