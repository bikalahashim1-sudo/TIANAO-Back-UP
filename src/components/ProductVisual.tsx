import React, { useState } from 'react';
import { Product } from '../data/products';
import { Maximize2, Compass, Layers } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductVisualProps {
  product: Product;
  className?: string;
  showBlueprintToggle?: boolean;
  aspect?: '16:9' | '4:3' | '1:1' | 'auto';
  onImageClick?: () => void;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  className = '',
  showBlueprintToggle = false,
  aspect = '4:3',
  onImageClick,
}) => {
  const [viewMode, setViewMode] = useState<'photo' | 'detail' | 'blueprint'>('photo');
  const [imageError, setImageError] = useState(false);
  const [ambientBackdropUrl, setAmbientBackdropUrl] = useState<string | null>(null);
  const { t, localizeProduct } = useLanguage();
  const loc = localizeProduct(product);

  const aspectClass =
    aspect === '16:9'
      ? 'aspect-[16/9]'
      : aspect === '4:3'
      ? 'aspect-[4/3]'
      : aspect === '1:1'
      ? 'aspect-square'
      : '';

  const activeImage =
    viewMode === 'detail' && product.detailImage
      ? product.detailImage
      : product.heroImage ||
        (product.category === 'sofas'
          ? IMAGES.taq106
          : product.category === 'recliners'
          ? IMAGES.taq810
          : product.category === 'beds'
          ? IMAGES.bed01
          : IMAGES.chair9808);

  const showAmbientBackdrop = Boolean(activeImage && ambientBackdropUrl === activeImage);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!activeImage) return;
    try {
      const img = e.currentTarget;
      const canvas = document.createElement('canvas');
      canvas.width = 12;
      canvas.height = 12;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, 12, 12);
      const pixels = ctx.getImageData(0, 0, 12, 12).data;
      const corners = [
        [0, 0],
        [11, 0],
        [0, 11],
        [11, 11],
      ];
      let brightCorners = 0;
      for (const [x, y] of corners) {
        const idx = (y * 12 + x) * 4;
        if (pixels[idx] > 232 && pixels[idx + 1] > 232 && pixels[idx + 2] > 232) {
          brightCorners += 1;
        }
      }
      setAmbientBackdropUrl(brightCorners >= 2 ? null : activeImage);
    } catch {
      setAmbientBackdropUrl(null);
    }
  };

  const primaryColor = product.colors[0] || 'Charcoal';

  const getColorTone = (colorName: string) => {
    const c = colorName.toLowerCase();
    if (c.includes('black') || c.includes('obsidian') || c.includes('charcoal'))
      return { bg: '#222223', text: '#FAF9F6', accent: '#3A3A3C', border: '#444' };
    if (c.includes('olive') || c.includes('forest'))
      return { bg: '#4A5340', text: '#FAF9F6', accent: '#5C6750', border: '#606C54' };
    if (c.includes('sage') || c.includes('eucalyptus') || c.includes('pistachio'))
      return { bg: '#6B7A6C', text: '#FAF9F6', accent: '#7E8F7F', border: '#8A9B8B' };
    if (c.includes('cognac') || c.includes('caramel') || c.includes('saddle') || c.includes('tan'))
      return { bg: '#8B5A2B', text: '#FAF9F6', accent: '#A06832', border: '#B8783B' };
    if (c.includes('terracotta') || c.includes('orange') || c.includes('rust'))
      return { bg: '#A34F2D', text: '#FAF9F6', accent: '#B85B35', border: '#C9653C' };
    if (c.includes('mocha') || c.includes('espresso') || c.includes('brown') || c.includes('chestnut'))
      return { bg: '#3D312A', text: '#FAF9F6', accent: '#4E3E36', border: '#5C4A40' };
    if (c.includes('grey') || c.includes('slate') || c.includes('graphite'))
      return { bg: '#4A5057', text: '#FAF9F6', accent: '#5C646D', border: '#6C7580' };
    if (c.includes('ivory') || c.includes('cream') || c.includes('white') || c.includes('oatmeal'))
      return { bg: '#EBE7DE', text: '#2A2927', accent: '#DFD9CE', border: '#CCC5B7' };
    return { bg: '#544F49', text: '#FAF9F6', accent: '#6B655E', border: '#7A736B' };
  };

  const tone = getColorTone(primaryColor);

  return (
    <div className={`relative overflow-hidden group bg-[#F5F4F0] ${aspectClass} ${className}`}>
      {viewMode !== 'blueprint' ? (
        activeImage && !imageError ? (
          <div
            key={activeImage}
            className="w-full h-full relative cursor-pointer bg-white overflow-hidden flex items-center justify-center"
            onClick={onImageClick}
          >
            {showAmbientBackdrop && (
              <img
                src={activeImage}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-30 pointer-events-none"
              />
            )}
            <img
              src={activeImage}
              alt={loc.name}
              referrerPolicy="no-referrer"
              onLoad={handleImageLoad}
              onError={() => setImageError(true)}
              className="relative z-10 w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-6 relative cursor-pointer select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            onClick={onImageClick}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#F2EFE9] via-[#FAF9F6] to-[#ECE8E0]" />
            <div className="absolute bottom-6 w-3/4 h-8 bg-black/10 rounded-full blur-xl transform scale-y-50" />

            <div className="relative z-10 w-full max-w-[85%] flex flex-col items-center">
              {product.category === 'sofas' && (
                <svg viewBox="0 0 400 160" className="w-full h-auto drop-shadow-md">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="30" width="320" height="60" rx="8" fill={`url(#grad-${product.id})`} />
                  <rect x="30" y="80" width="165" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1.5" />
                  <rect x="205" y="80" width="165" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1.5" />
                  <rect x="20" y="55" width="40" height="75" rx="6" fill={tone.accent} />
                  <rect x="340" y="55" width="40" height="75" rx="6" fill={tone.accent} />
                  <rect x="45" y="132" width="310" height="6" rx="2" fill="#2A2A2A" />
                </svg>
              )}

              {product.category === 'recliners' && (
                <svg viewBox="0 0 400 170" className="w-full h-auto drop-shadow-md">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  <rect x="35" y="20" width="140" height="70" rx="10" fill={`url(#grad-${product.id})`} />
                  <rect x="225" y="20" width="140" height="70" rx="10" fill={`url(#grad-${product.id})`} />
                  <rect x="180" y="45" width="40" height="85" rx="6" fill="#1C1B1A" />
                  <rect x="30" y="85" width="145" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1" />
                  <rect x="225" y="85" width="145" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1" />
                </svg>
              )}

              {product.category === 'beds' && (
                <svg viewBox="0 0 400 180" className="w-full h-auto drop-shadow-md">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="15" width="320" height="85" rx="8" fill={`url(#grad-${product.id})`} stroke={tone.border} strokeWidth="1" />
                  <rect x="50" y="85" width="300" height="50" rx="6" fill="#FBFBFA" stroke="#DCD8D0" strokeWidth="1.5" />
                  <rect x="42" y="132" width="316" height="18" rx="4" fill={tone.bg} />
                </svg>
              )}

              {product.category === 'chairs-tables' && (
                <svg viewBox="0 0 300 200" className="w-full max-w-[240px] h-auto drop-shadow-md">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  {product.model.includes('No.3') || product.model.includes('No.4') || product.model.includes('S-56') ? (
                    <g>
                      <rect x="60" y="40" width="180" height="110" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1.5" />
                      <rect x="55" y="34" width="190" height="10" rx="2" fill="#F4F2EE" stroke="#CCC5B7" strokeWidth="1" />
                      <line x1="60" y1="92" x2="240" y2="92" stroke={tone.border} strokeWidth="1.5" />
                      <circle cx="150" cy="65" r="4" fill="#C29B38" />
                      <circle cx="150" cy="120" r="4" fill="#C29B38" />
                    </g>
                  ) : (
                    <g>
                      <path d="M 60 120 C 60 50, 240 50, 240 120 Z" fill={`url(#grad-${product.id})`} />
                      <ellipse cx="150" cy="125" rx="80" ry="32" fill={tone.bg} stroke={tone.border} strokeWidth="1" />
                      <line x1="150" y1="155" x2="150" y2="175" stroke="#1A1A1A" strokeWidth="5" />
                      <ellipse cx="150" cy="178" rx="45" ry="8" fill="#1A1A1A" />
                    </g>
                  )}
                </svg>
              )}
            </div>

            <div className="absolute top-4 start-4 flex items-center gap-2">
              <span className="text-xs tracking-wider font-semibold text-stone-800 bg-white/95 px-2.5 py-1 rounded shadow-xs border border-stone-200">
                {product.model}
              </span>
            </div>

            <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-xs text-stone-700 font-medium">
              <span className="truncate max-w-[65%]">
                {product.dimensions.length}{' '}
                {product.dimensions.depth
                  ? `× ${product.dimensions.depth}`
                  : product.dimensions.width
                  ? `× ${product.dimensions.width}`
                  : ''}
              </span>
              <span>
                {t.productModal.pdfPageShort}
                {product.pageNumber}
              </span>
            </div>
          </div>
        )
      ) : (
        /* Blueprint Schematic Mode */
        <div className="w-full h-full p-6 flex flex-col justify-between bg-[#191C1E] text-stone-200 select-none relative">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(#485D6C 1px, transparent 1px), linear-gradient(90deg, #485D6C 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 flex items-center justify-between border-b border-stone-700/80 pb-2.5">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span className="text-sm tracking-wider text-amber-300 font-semibold">
                {product.model}
              </span>
            </div>
            <span className="text-xs text-stone-300 tracking-wider">
              {t.productModal.pdfPageShort}
              {product.pageNumber}
            </span>
          </div>

          <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 360 140" className="w-full max-w-[320px] h-auto text-amber-200/90">
              <rect x="50" y="30" width="260" height="70" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 4" />
              <rect x="55" y="35" width="250" height="60" fill="#1E293B" stroke="#93C5FD" strokeWidth="2" rx="4" />
              <line x1="50" y1="18" x2="310" y2="18" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="180" y="14" fill="#F59E0B" fontSize="11" textAnchor="middle" fontWeight="bold">
                {product.dimensions.length}
              </text>
              <line x1="330" y1="35" x2="330" y2="95" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="348" y="70" fill="#F59E0B" fontSize="10" textAnchor="middle" transform="rotate(90 348 70)">
                {product.dimensions.depth || product.dimensions.width || '105 cm'}
              </text>
            </svg>

            {loc.breakdown && (
              <p className="text-xs text-stone-200 mt-2 text-center bg-stone-800/85 px-3 py-1 rounded border border-stone-700/60 max-w-sm">
                {loc.breakdown}
              </p>
            )}
          </div>

          <div className="relative z-10 pt-2 border-t border-stone-800 text-xs text-stone-300 flex items-center justify-between">
            <span>{loc.frameSpec || t.productModal.frameDefault}</span>
            <span>1:20</span>
          </div>
        </div>
      )}

      {/* Blueprint / Detail / Photo Toggle Buttons */}
      <div className="absolute top-3 end-3 z-20 flex items-center gap-1.5">
        {product.detailImage && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode((prev) => (prev === 'detail' ? 'photo' : 'detail'));
            }}
            className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded backdrop-blur-xs transition-colors shadow-sm cursor-pointer ${
              viewMode === 'detail'
                ? 'bg-amber-600 text-white'
                : 'bg-black/80 hover:bg-black text-white'
            }`}
          >
            <span>{viewMode === 'detail' ? t.productModal.overview : t.productModal.detailView}</span>
          </button>
        )}

        {showBlueprintToggle && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode((prev) => (prev === 'blueprint' ? 'photo' : 'blueprint'));
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-black/80 hover:bg-black text-white rounded backdrop-blur-xs transition-colors shadow-sm cursor-pointer"
          >
            {viewMode === 'blueprint' ? (
              <>
                <Layers className="w-3.5 h-3.5 text-stone-200" />
                <span>{t.productModal.photo}</span>
              </>
            ) : (
              <>
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.productModal.blueprint}</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Quick click zoom hint */}
      {onImageClick && viewMode === 'photo' && (
        <button
          type="button"
          onClick={onImageClick}
          className="absolute bottom-3 end-3 z-10 p-2 bg-white/90 hover:bg-white text-stone-800 rounded-full shadow-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label={t.cta.details}
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
