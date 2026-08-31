const internationalization = {
  "locales": [
    "fr",
    "en",
    "ja"
  ],
  "requiredLocales": [
    "fr",
    "en",
    "ja"
  ],
  "strictMode": "inclusive",
  "defaultLocale": "fr"
};
const dictionary = {
  "fill": true,
  "contentAutoTransformation": false,
  "location": "local",
  "importMode": "static"
};
const routing = {
  "mode": "prefix-no-default",
  "storage": {
    "cookies": [
      {
        "name": "INTLAYER_LOCALE",
        "attributes": {
          "path": "/"
        }
      }
    ],
    "headers": [
      {
        "name": "x-intlayer-locale"
      }
    ]
  },
  "basePath": ""
};
const content = {
  "fileExtensions": [
    ".content.ts",
    ".content.js",
    ".content.cjs",
    ".content.mjs",
    ".content.json",
    ".content.json5",
    ".content.jsonc",
    ".content.tsx",
    ".content.jsx",
    ".content.md",
    ".content.mdx",
    ".content.yaml",
    ".content.yml"
  ],
  "contentDir": [
    "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan"
  ],
  "codeDir": [
    "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan"
  ],
  "excludedPath": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.intlayer/**",
    "**/.next/**",
    "**/.nuxt/**",
    "**/.expo/**",
    "**/.vercel/**",
    "**/.turbo/**",
    "**/.tanstack/**",
    "**/.output/**",
    "**/.svelte-kit/**"
  ],
  "watch": true
};
const system = {
  "baseDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan",
  "moduleAugmentationDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\types",
  "unmergedDictionariesDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\unmerged_dictionary",
  "remoteDictionariesDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\remote_dictionary",
  "dictionariesDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\dictionary",
  "dynamicDictionariesDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\dynamic_dictionary",
  "fetchDictionariesDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\fetch_dictionary",
  "typesDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\types",
  "mainDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\main",
  "configDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\config",
  "cacheDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\cache",
  "tempDir": "C:\\Users\\baver\\Desktop\\portolio\\portfolio-ewan\\.intlayer\\tmp"
};
const editor = {
  "editorURL": "http://localhost:8000",
  "cmsURL": "https://app.intlayer.org",
  "backendURL": "https://back.intlayer.org",
  "port": 8000,
  "enabled": false,
  "dictionaryPriorityStrategy": "local_first",
  "liveSync": false,
  "liveSyncPort": 4000,
  "liveSyncURL": "http://localhost:4000"
};
const analytics = {
  "enabled": false,
  "flushInterval": 20000,
  "sampleRate": 1
};
const log = {
  "mode": "default",
  "prefix": "\u001b[38;5;239m[intlayer] \u001b[0m"
};
const ai = {
  "provider": "mistral",
  "apiKey": "cjv0He9xLo50gCDWJFWzYHuYFIyfQAhe",
  "model": "codestral-2508",
  "applicationContext": ""
};
const build = {
  "mode": "auto",
  "minify": false,
  "purge": false,
  "traversePattern": [
    "**/*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/build/**",
    "!**/.intlayer/**",
    "!**/.next/**",
    "!**/.nuxt/**",
    "!**/.expo/**",
    "!**/.vercel/**",
    "!**/.turbo/**",
    "!**/.tanstack/**",
    "!**/.output/**",
    "!**/.svelte-kit/**",
    "!**/*.config.*",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!**/*.stories.*",
    "!**/*.d.ts",
    "!**/*.d.ts.map",
    "!**/*.map"
  ],
  "outputFormat": [
    "esm",
    "cjs"
  ],
  "cache": true,
  "checkTypes": false
};
const compiler = {
  "enabled": false,
  "dictionaryKeyPrefix": "",
  "noMetadata": false,
  "saveComponents": false
};
const schemas = undefined;
const plugins = [
  {}
];

export { internationalization, dictionary, routing, content, system, editor, analytics, log, ai, build, compiler, schemas, plugins };
