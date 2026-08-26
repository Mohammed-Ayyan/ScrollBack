'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Music2, Flame, Sparkles } from 'lucide-react';

export const ScrollingPhone: React.FC = () => {
  const mockReels = [
    {
      author: '@dance_viral',
      caption: 'Try this new trend before it goes viral! 💃🔥 #reels #dance',
      likes: '1.2M',
      comments: '14k',
      music: 'Original Audio - viral_beats',
      gradient: 'from-purple-900 via-rose-950 to-zinc-950',
    },
    {
      author: '@chef_hacks',
      caption: '30-second garlic butter pasta perfection 🍝🤌 #foodtok #recipe',
      likes: '890K',
      comments: '8.2k',
      music: 'Lofi Chill Vibes - Chef Beat',
      gradient: 'from-amber-950 via-rose-950 to-zinc-950',
    },
    {
      author: '@life_hacks_daily',
      caption: 'You have been organizing cables WRONG your whole life! 🤯',
      likes: '2.4M',
      comments: '32k',
      music: 'Trending Sound - TechHacks',
      gradient: 'from-cyan-950 via-indigo-950 to-zinc-950',
    },
    {
      author: '@fitness_coach',
      caption: '10 minute abs workout that actually works 🏋️‍♂️💯',
      likes: '540K',
      comments: '4.1k',
      music: 'Motivational Gym Track',
      gradient: 'from-emerald-950 via-teal-950 to-zinc-950',
    },
  ];

  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[620px]">
      {/* Glow Aura */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-rose via-brand-purple to-brand-cyan rounded-[50px] opacity-40 blur-2xl animate-glow-pulse" />

      {/* Phone Body Bezel */}
      <div className="relative w-full h-full rounded-[44px] border-[8px] border-zinc-800 bg-black shadow-2xl overflow-hidden flex flex-col">
        {/* Phone Notch / Speaker */}
        <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 flex justify-center items-center">
          <div className="w-24 h-4 bg-zinc-900 rounded-b-xl flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
            <div className="w-10 h-1 bg-zinc-800 rounded-full" />
          </div>
        </div>

        {/* Scrollable Feed Container */}
        <div className="w-full h-full overflow-hidden relative pt-6">
          <motion.div
            animate={{
              y: ['0%', '-50%'],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-full flex flex-col"
          >
            {[...mockReels, ...mockReels].map((reel, idx) => (
              <div
                key={idx}
                className={`w-full h-[550px] flex-shrink-0 bg-gradient-to-b ${reel.gradient} relative p-4 flex flex-col justify-between border-b border-white/10`}
              >
                {/* Floating overlay particle effect */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white/90 border border-white/10">
                  <Flame className="w-3.5 h-3.5 text-brand-rose animate-pulse" />
                  <span>Reel #{idx + 1}</span>
                </div>

                <div className="mt-auto space-y-3 pb-8">
                  {/* Right side interaction buttons */}
                  <div className="absolute right-3 bottom-12 flex flex-col items-center gap-5 text-white">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Heart className="w-5 h-5 text-brand-rose fill-brand-rose" />
                      </div>
                      <span className="text-[10px] mt-1 font-medium">{reel.likes}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] mt-1 font-medium">{reel.comments}</span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Share2 className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Caption & Music */}
                  <div className="max-w-[80%] space-y-1 text-left">
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {reel.author}
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyan fill-brand-cyan" />
                    </h4>
                    <p className="text-xs text-zinc-200 line-clamp-2 leading-relaxed">
                      {reel.caption}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400 pt-1">
                      <Music2 className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="truncate">{reel.music}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
