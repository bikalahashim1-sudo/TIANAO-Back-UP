import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  getLocalizedProduct,
  Language,
  PRODUCT_AR_TRANSLATIONS,
  SERIES_TRANSLATIONS,
} from './productTranslations';
import { TRANSLATIONS, getDirection, isValidLanguage } from './translations';
import type { Product } from '../data/products';

const CJK_REGEX = /[\u4e00-\u9fff]/;

test('isValidLanguage validates supported locales only', () => {
  assert.equal(isValidLanguage('en'), true);
  assert.equal(isValidLanguage('zh'), true);
  assert.equal(isValidLanguage('ar'), true);
  assert.equal(isValidLanguage('fr'), false);
  assert.equal(isValidLanguage(null), false);
});

test('getDirection returns rtl for Arabic and ltr for English/Chinese', () => {
  assert.equal(getDirection('ar'), 'rtl');
  assert.equal(getDirection('en'), 'ltr');
  assert.equal(getDirection('zh'), 'ltr');
});

test('English and Arabic UI dictionaries contain zero Chinese characters', () => {
  const serializeStrings = (obj: unknown): string[] => {
    if (typeof obj === 'string') return [obj];
    if (Array.isArray(obj)) return obj.flatMap(serializeStrings);
    if (obj && typeof obj === 'object') {
      return Object.values(obj).flatMap(serializeStrings);
    }
    return [];
  };

  for (const lang of ['en', 'ar'] as Language[]) {
    const strings = serializeStrings(TRANSLATIONS[lang]);
    assert.ok(strings.length > 50);
    for (const s of strings) {
      assert.equal(
        CJK_REGEX.test(s),
        false,
        `Unexpected CJK character in ${lang} translation: ${s}`
      );
    }
  }
});

test('Arabic product translations cover all 40 products and contain zero CJK characters', () => {
  const src = fs.readFileSync('src/data/products.ts', 'utf8');
  const ids = [...src.matchAll(/\n\s+id:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.equal(ids.length, 40);

  for (const id of ids) {
    assert.ok(PRODUCT_AR_TRANSLATIONS[id], `Missing Arabic translation for product id: ${id}`);
  }

  for (const [id, entry] of Object.entries(PRODUCT_AR_TRANSLATIONS)) {
    const strings = [
      entry.name,
      entry.categoryLabel,
      entry.tagline || '',
      entry.description,
      entry.matchingItems || '',
    ];
    for (const s of strings) {
      assert.equal(CJK_REGEX.test(s), false, `Unexpected CJK in AR product ${id}: ${s}`);
    }
  }

  for (const s of Object.values(SERIES_TRANSLATIONS.en).concat(Object.values(SERIES_TRANSLATIONS.ar))) {
    assert.equal(CJK_REGEX.test(s), false);
  }
});

test('src/data/products.ts has zero CJK characters in non-Cn fields', () => {
  const lines = fs.readFileSync('src/data/products.ts', 'utf8').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (CJK_REGEX.test(line) && !/Cn:|cn:|^\s*\*/.test(line)) {
      assert.fail(`Unexpected CJK character in non-Cn field at line ${i + 1}: ${line}`);
    }
  }
});

test('getLocalizedProduct isolates Chinese to zh mode only', () => {
  const sample: Product = {
    id: 'ta-minimalist-walnut-boucle-sofa',
    model: 'TA-M04',
    name: 'Sculpted Walnut & Ivory Bouclé 3-Seater Sofa',
    nameCn: '胡桃木极简羊羔绒沙发',
    category: 'sofas',
    categoryLabel: 'Minimalist Living Sofa',
    series: 'High-End Minimalist Series',
    seriesCn: '高端极简系列',
    tagline: 'Creating an ideal home.',
    taglineCn: '打造理想的家居环境。',
    description: 'Clean organic three-seater sofa.',
    dimensions: { length: '240 cm', depth: '98 cm', height: '78 cm' },
    materials: ['Textured Ivory Bouclé Fabric'],
    colors: ['Warm Ivory Bouclé & Walnut'],
    features: ['Sculpted solid walnut corner legs'],
    pageNumber: 7,
    heroImage: 'test.jpg',
  };

  const enView = getLocalizedProduct(sample, 'en');
  assert.equal(CJK_REGEX.test(enView.name), false);
  assert.equal(CJK_REGEX.test(enView.tagline), false);

  const arView = getLocalizedProduct(sample, 'ar');
  assert.equal(CJK_REGEX.test(arView.name), false);
  assert.equal(CJK_REGEX.test(arView.tagline), false);

  const zhView = getLocalizedProduct(sample, 'zh');
  assert.equal(zhView.name, '胡桃木极简羊羔绒沙发');
  assert.equal(zhView.series, '高端极简系列');
});

test('furniture model labels contain zero # symbols across products, Hero, and translations', () => {
  const dataFilesToCheck = [
    'src/data/products.ts',
    'src/i18n/productTranslations.ts',
    'src/i18n/translations.ts',
  ];
  for (const file of dataFilesToCheck) {
    const content = fs.readFileSync(file, 'utf8');
    assert.equal(
      /#/.test(content),
      false,
      `Unexpected # character found in ${file}`
    );
  }

  const heroContent = fs.readFileSync('src/components/Hero.tsx', 'utf8');
  const badgeMatches = [...heroContent.matchAll(/badgeModel:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.ok(badgeMatches.length >= 4);
  for (const badge of badgeMatches) {
    assert.equal(badge.includes('#'), false, `Unexpected # in Hero badgeModel: ${badge}`);
  }

  const catContent = fs.readFileSync('src/components/CategorySection.tsx', 'utf8');
  const highlightMatches = [...catContent.matchAll(/highlightModel:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.equal(highlightMatches.length, 4);
  for (const hl of highlightMatches) {
    assert.equal(hl.includes('#'), false, `Unexpected # in CategorySection highlightModel: ${hl}`);
  }
});
