import type { Lang, Variant, SiteContent } from './types.js';
import { gamer } from './content/gamer.js';
import { formal } from './content/formal.js';

// ============================================================
// Agregador de variantes ("skins") do site.
// Cada variante tem conteúdo completo em PT e EN:
//   - gamer  → /gamer-resume (retro neon, ênfase em jogos)
//   - formal → /formal-resume (corporativo, ênfase em full-stack/IA)
// Para criar uma nova variante: crie src/content/<nome>.ts,
// adicione ao objeto abaixo e ao tipo Variant em types.ts.
// ============================================================

export const content: Record<Variant, Record<Lang, SiteContent>> = {
  gamer,
  formal,
};

export function pickLang(raw: unknown): Lang {
  return raw === 'en' ? 'en' : 'pt';
}

export function pickVariant(raw: unknown): Variant {
  return raw === 'formal' ? 'formal' : 'gamer';
}
