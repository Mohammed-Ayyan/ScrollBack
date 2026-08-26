'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Copy, Check, Sparkles, Shield, Compass, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';

interface AttentionPassportProps {
  startYear: number;
  totalDaysLost: number;
  estimatedReels: number;
  dailyHours: number;
}

export const AttentionPassport: React.FC<AttentionPassportProps> = ({
  startYear,
  totalDaysLost,
  estimatedReels,
  dailyHours,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Derive scroll personality & attention score
  let personality = 'Evening Observer';
  if (dailyHours >= 4) personality = 'Midnight Explorer';
  else if (dailyHours >= 2) personality = 'Dopamine Streamer';

  const attentionScore = Math.max(12, Math.round(100 - (dailyHours / 6) * 70));

  const handleCopy = () => {
    navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.origin : '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsGenerating(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, quality: 0.95 });
      const link = document.createElement('a');
      link.download = `ScrollBack-Passport-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export passport graphic', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-20 border-b border-editorial-border bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4" /> Collectible Audit // Attention Passport
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your Official Attention Passport
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            A shareable collectible passport document summarizing your scroll personality and attention metrics.
          </p>
        </div>

        {/* Passport Card Container */}
        <div className="max-w-md mx-auto space-y-6">
          
          {/* Printable Passport Target */}
          <div
            ref={cardRef}
            className="w-full border-2 border-accent-coral/60 bg-surface-50 p-6 sm:p-8 space-y-6 text-left relative overflow-hidden shadow-2xl select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-editorial-border pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-coral" />
                <span className="text-lg font-black font-mono tracking-tighter text-white uppercase">
                  SCROLLBACK // PASSPORT
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-accent-coral uppercase border border-accent-coral/40 px-2 py-0.5">
                OFFICIAL REPORT
              </span>
            </div>

            {/* Main Passport Data Fields */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <p className="text-[10px] text-editorial-dim uppercase">START YEAR</p>
                <p className="text-base font-bold text-white">{startYear}</p>
              </div>

              <div>
                <p className="text-[10px] text-editorial-dim uppercase">TOTAL DAYS LOST</p>
                <p className="text-base font-bold text-accent-coral">{Math.round(totalDaysLost)} Days</p>
              </div>

              <div>
                <p className="text-[10px] text-editorial-dim uppercase">ESTIMATED REELS</p>
                <p className="text-base font-bold text-white">{estimatedReels.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-[10px] text-editorial-dim uppercase">ATTENTION SCORE</p>
                <p className="text-base font-bold text-accent-emerald">{attentionScore} / 100</p>
              </div>
            </div>

            {/* Personality Badge */}
            <div className="p-4 border border-editorial-border bg-background space-y-1">
              <p className="text-[10px] font-mono text-editorial-dim uppercase flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-accent-coral" /> SCROLL PERSONALITY
              </p>
              <p className="text-lg font-mono font-bold text-white">{personality}</p>
            </div>

            <div className="pt-2 text-[10px] font-mono text-editorial-dim text-center border-t border-editorial-border">
              Issued by ScrollBack Report Engine // scrollback.app
            </div>
          </div>

          {/* Download & Share Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="w-full py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)] cursor-pointer flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Exporting Passport...' : 'Download Passport Graphic'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="w-full py-3 bg-surface-100 border border-editorial-border hover:border-editorial-border-bright text-white font-mono text-xs font-bold uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Share Link'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
