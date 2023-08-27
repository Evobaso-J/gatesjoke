import { createI18n } from "vue-i18n";
import enUS from "../locales/en-US.json";
import itIT from "../locales/it-IT.json";

// Type-define 'it-IT' as the master schema for the resource
type MessageSchema = typeof itIT;

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n<[MessageSchema], "en-US" | "it-IT">({
    legacy: false,
    globalInjection: true,
    locale: "it-IT",
    messages: {
      "it-IT": itIT,
      "en-US": enUS,
    },
  });

  vueApp.use(i18n);
});
