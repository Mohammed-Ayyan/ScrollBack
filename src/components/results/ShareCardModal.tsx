'use client';

import React, { useRef, useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Download, Share2, Copy, Check, Sparkles, X, Clock, Film } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  yearsLost: number;
  monthsLost: number;
  daysLost: number;
  estimatedReels: number;
  booksCount: number;
  shareUrl: string;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({
  isOpen,
  onClose,
  yearsLost,
  monthsLost,
  daysLost,
  estimatedReels,
  booksCount,
  shareUrl,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

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
      link.download = `ScrollBack-TimeLost-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export image', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-rose" />
            Share Your ScrollBack
          </h3>
          <p className="text-xs text-zinc-400">Download your story card or share website link</p>
        </div>

        {/* Printable Visual Card Target */}
        <div
          ref={cardRef}
          className="w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-brand-rose/40 rounded-2xl p-6 space-y-6 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Subtle Ambient Glow inside image */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-rose/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-purple/30 rounded-full blur-2xl pointer-events-none" />

          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-lg font-extrabold text-white">
              Scroll<span className="text-brand-rose">Back</span>
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand-rose/20 text-brand-rose">
              Reels Time Audit
            </span>
          </div>

          {/* Main Visual Stats */}
          <div className="space-y-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">I spent a total of</p>
            <p className="text-3xl sm:text-4xl font-black text-brand-rose tracking-tight">
              {yearsLost > 0 ? `${yearsLost}y ` : ''}{monthsLost}m {daysLost}d
            </p>
            <p className="text-sm font-medium text-zinc-200">watching short vertical videos</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-left pt-2 border-t border-white/10">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <p className="text-[10px] text-zinc-400">Reels Watched</p>
              <p className="text-lg font-bold text-white flex items-center gap-1">
                <Film className="w-4 h-4 text-brand-cyan" />
                {estimatedReels.toLocaleString()}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <p className="text-[10px] text-zinc-400">Could Have Read</p>
              <p className="text-lg font-bold text-brand-purple">
                {booksCount} Books
              </p>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-zinc-500 font-mono">
            Calculate yours at scrollback.app
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleDownloadImage}
            disabled={isGenerating}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-rose to-brand-purple text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] transition-all"
          >
            <Download className="w-4 h-4" />
            {isGenerating ? 'Generating PNG Card...' : 'Download Image Card'}
          </button>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-zinc-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-zinc-300 font-mono focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
