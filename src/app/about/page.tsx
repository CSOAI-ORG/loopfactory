import { Metadata } from 'next';
import { Music, Repeat, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About LoopFactory AI',
  description: 'Learn about LoopFactory AI — AI-powered creative loop optimization.',
};

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
              <Music className="w-3.5 h-3.5" />
              About LoopFactory AI
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              AI-Powered <span className="text-brand-400">Creative Loop Optimization</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              LoopFactory AI is an intelligent creative platform that helps musicians, producers, and
              visual artists generate, refine, and perfect audio and visual loops. Whether you are
              crafting beats, designing motion graphics, or experimenting with generative art, our AI
              accelerates your creative workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our <span className="text-brand-400">Mission</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-card border border-border p-6">
              <Repeat className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="font-semibold mb-2">Loop Generation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered audio and visual loop generation from text prompts, humming, or reference material.
              </p>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <Music className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="font-semibold mb-2">Intelligent Refinement</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fine-tune tempo, key, arrangement, and texture with AI-assisted parameter sweep and style transfer.
              </p>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <Shield className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="font-semibold mb-2">Export &amp; Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seamless export to DAWs, video editors, and streaming platforms with royalty-free licensing built in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Part of the Consumer AI Cluster</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            LoopFactory AI is part of a 6-domain consumer AI portfolio alongside Fishkeeper, KoiKeeper, DIYHelp, PokerHUD, and SuicideStop.
          </p>
        </div>
      </section>
    </div>
  );
}