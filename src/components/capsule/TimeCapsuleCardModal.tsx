'use client';

import React, { useRef, useState } from 'react';
import { Download, Copy, Check, X, Sparkles, Hourglass, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';
import { TimeCapsuleData } from '@/types';

interface TimeCapsuleCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  capsuleData: TimeCapsuleData;
}

export const TimeCapsuleCardModal: React.FC<TimeCapsuleCardModalProps> = ({
  isOpen,
  onClose,
  capsuleData,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.origin : '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    try {
      setIsGenerating(true);
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, quality: 0.95 });
      const link = document.createElement('a');
      link.download = `ScrollBack-TimeCapsule-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export time capsule graphic', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md select-none">
      <div className="relative w-full max-w-md bg-surface-50 border border-editorial-border p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-editorial-dim hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <h3 className="text-xl font-bold font-mono text-white flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-accent-coral" />
            Your Time Capsule
          </h3>
          <p className="text-xs font-mono text-editorial-muted">Download sealed capsule card or copy website link</p>
        </div>

        {/* High-Impact Printable Capsule Card Target */}
        <div
          ref={cardRef}
          className="w-full bg-background border-2 border-accent-coral/70 p-6 space-y-6 text-left relative overflow-hidden select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-editorial-border pb-4">
            <span className="text-lg font-black uppercase tracking-tight text-white">
              Scroll<span className="text-accent-coral">Back</span>
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-accent-coral/20 text-accent-coral uppercase">
              SEALED TIME CAPSULE
            </span>
          </div>

          {/* Past lost days */}
          <div className="space-y-1 border-b border-editorial-border pb-4">
            <p className="text-[10px] font-mono uppercase text-editorial-dim">MY PAST</p>
            <p className="text-lg font-bold font-mono text-white">
              I spent <span className="text-accent-coral font-extrabold">{Math.round(capsuleData.pastDaysLost)} days</span> scrolling.
            </p>
          </div>

          {/* Future Intention */}
          <div className="space-y-1 border-b border-editorial-border pb-4">
            <p className="text-[10px] font-mono uppercase text-editorial-dim">MY INTENTION</p>
            <p className="text-lg font-bold font-mono text-accent-coral">
              {capsuleData.customGoal || capsuleData.selectedGoalLabel}
            </p>
            <p className="text-xs font-mono text-editorial-muted">
              Reclaiming {capsuleData.dailyReclaimedMinutes} mins / day (~{Math.round((capsuleData.dailyReclaimedMinutes * 365.25) / 60)} hrs / year)
            </p>
          </div>

          {/* Personal Promise */}
          {capsuleData.promiseText && (
            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase text-editorial-dim">MY PROMISE TO FUTURE ME</p>
              <p className="text-xs font-mono text-white italic bg-surface-50 border border-editorial-border p-3">
                &quot;{capsuleData.promiseText}&quot;
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="pt-2 border-t border-editorial-border text-[10px] font-mono text-editorial-dim flex justify-between">
            <span>Created {capsuleData.createdAt}</span>
            <span>scrollback.app</span>
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
            {isGenerating ? 'Sealing & Generating Card...' : 'Download Sealed Capsule Graphic'}
          </button>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={typeof window !== 'undefined' ? window.location.origin : ''}
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
