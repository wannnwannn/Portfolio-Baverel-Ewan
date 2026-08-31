import "intlayer";
import _xqakf61usy from './translation.ts';

declare module 'intlayer' {
  interface __DictionaryRegistry {
    "translation": typeof _xqakf61usy;
  }

  interface __DeclaredLocalesRegistry {
    "fr": 1;
    "en": 1;
    "ja": 1;
  }

  interface __RequiredLocalesRegistry {
    "fr": 1;
    "en": 1;
    "ja": 1;
  }

  interface __SchemaRegistry {

  }

  interface __StrictModeRegistry { mode: 'inclusive' }

  interface __EditorRegistry { enabled : false }

  interface __RoutingRegistry { mode: 'prefix-no-default'; defaultLocale: 'fr' }
}
