import { Locale, Locales, type IntlayerConfig } from "intlayer";
import { syncJSON } from "@intlayer/sync-json-plugin";

const locales = ["fr", "en", "ja"] as const;
const defaultLocale: Locale = "fr";

const config: IntlayerConfig = {
    
    internationalization: {
        locales: [...locales],
        defaultLocale,
    },

    plugins: [
        syncJSON({
            source: ({key, locale }) => `locales/${locale}/${key}.json`,
        }),
    ],
    ai: {
        provider: "mistral",
        model: "codestral-2508",
        applicationContext: "",
        apiKey: 'cjv0He9xLo50gCDWJFWzYHuYFIyfQAhe'
    }
};

export default config;