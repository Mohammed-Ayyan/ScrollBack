'use client';

import React, { useRef, useState } from 'react';
import { Download, Copy, Check, X, Sparkles, Film } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  yearsLost: number;
  monthsLost: number;
  daysLost: number;
  totalDaysLost: number;
  estimatedReels: number;
  booksCount: number;
  shareUrl: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  yearsLost,
  monthsLost,
  daysLost,
  totalDaysLost,
  estimatedReels,
  booksCount,
  shareUrl,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const yearsDecimal = (totalDaysLost / 365.25).toFixed(1);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    try {
      setIsGenerating(true);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, quality: 0.95 });
      const link = document.createElement('a');
      link.download = `ScrollBack-Report-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export share graphic', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-surface-50 border border-editorial-border p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-editorial-dim hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <h3 className="text-xl font-bold font-mono text-white flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-accent-coral" />
            Share Your ScrollBack
          </h3>
          <p className="text-xs font-mono text-editorial-muted">Download story graphic or copy website link</p>
        </div>

        {/* High-Impact Printable Graphic Card */}
        <div
          ref={cardRef}
          className="w-full bg-background border border-accent-coral/60 p-6 space-y-6 text-center relative overflow-hidden select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-editorial-border pb-4">
            <span className="text-lg font-black uppercase tracking-tight text-white">
              Scroll<span className="text-accent-coral">Back</span>
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-accent-coral/20 text-accent-coral uppercase">
              Time Audit
            </span>
          </div>

          {/* Statement */}
          <div className="space-y-3 py-2">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-editorial-muted">
              I&apos;ve spent approximately
            </p>
            <p className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-accent-coral">
              {Math.round(totalDaysLost)} DAYS
            </p>
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              watching Reels. That&apos;s <span className="text-accent-coral">{yearsDecimal} YEARS.</span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 text-left pt-2 border-t border-editorial-border">
            <div className="p-3 border border-editorial-border bg-surface-50 space-y-0.5">
              <p className="text-[10px] font-mono text-editorial-dim uppercase">Reels Watched</p>
              <p className="text-base font-bold font-mono text-white flex items-center gap-1">
                <Film className="w-3.5 h-3.5 text-accent-coral" />
                {estimatedReels.toLocaleString()}
              </p>
            </div>

            <div className="p-3 border border-editorial-border bg-surface-50 space-y-0.5">
              <p className="text-[10px] font-mono text-editorial-dim uppercase">Books Readable</p>
              <p className="text-base font-bold font-mono text-white">
                {booksCount} Books
              </p>
            </div>
          </div>

          <div className="pt-2 text-[10px] font-mono text-editorial-dim">
            Calculate yours at scrollback.app
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleDownloadImage}
            disabled={isGenerating}
            className="w-full py-3.5 px-4 bg-accent-coral text-background font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,77,77,0.3)]"
          >
            <Download className="w-4 h-4" />
            {isGenerating ? 'Generating Graphic...' : 'Download Image Card'}
          </button>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-background border border-editorial-border px-3 py-2.5 text-xs text-editorial-muted font-mono focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 bg-surface-100 hover:bg-surface-200 border border-editorial-border text-white text-xs font-mono font-bold uppercase flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
