import { Music, Play, Layers, Share2, ArrowRight, Sparkles, Sliders, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
              <Music className="w-3.5 h-3.5" />
              LoopFactory AI — AI Audio & Visual Agent Marketplace
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="text-foreground">Generate. Refine.</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Create Without Limits
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              AI-powered audio and visual loop generation for creators. 
              Browse the agent marketplace for specialized tools, or build custom creative workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/chat" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25">
                <Sparkles className="w-5 h-5" />
                Create Something
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/about" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors">
                <Layers className="w-5 h-5" />
                Browse Marketplace
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Creative <span className="text-brand-400">Agent Marketplace</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Music, title: 'Audio Loops', desc: 'Generate original beats, melodies, and soundscapes with AI music agents.' },
              { icon: Play, title: 'Visual Loops', desc: 'Create seamless video loops, motion graphics, and generative art.' },
              { icon: Layers, title: 'Agent Marketplace', desc: 'Browse and deploy specialized AI agents for specific creative tasks.' },
              { icon: Sliders, title: 'Custom Workflows', desc: 'Chain multiple agents together to build complex creative pipelines.' },
              { icon: Share2, title: 'Collaborate', desc: 'Share loops, remix community creations, and co-create in real-time.' },
              { icon: Globe, title: 'Royalty-Free', desc: 'All generated content is yours to use commercially. No strings attached.' },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl bg-card border border-border p-6 hover:border-brand-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
