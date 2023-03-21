import { Quasar } from "quasar";
import * as components from "quasar";
import * as directives from "quasar";
import langJa from "quasar/lang/ja";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    config: {
      brand: {
        primary: "#053a6e",
        secondary: "#1e7487",
        accent: "#9C27B0",

        dark: "#1d1d1d",
        "dark-page": "#121212",

        positive: "#21BA45",
        negative: "#C10015",
        info: "#31CCEC",
        warning: "#F2C037",
      },
    },
    components,
    directives,
    plugins: {},
    // ここは Quasar 側の lang 設定なので好みです。
    lang: langJa,
  });
});
