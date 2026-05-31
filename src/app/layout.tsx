import type { Metadata } from 'next';
import { Brain } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import './globals.css';

export const metadata: Metadata = {
  title: 'LoopFactory AI — AI-Powered Loop Optimization & Creative Workspace',
  description: 'AI-powered loop optimization and creative workspace. Generate, refine, and perfect audio loops.',
  keywords: ['loop', 'creative', 'AI', 'audio', 'music', 'optimization'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://loopfactory.ai',
    siteName: 'LoopFactory AI',
    title: 'LoopFactory AI — AI-Powered Loop Optimization & Creative Workspace',
    description: 'AI-powered loop optimization and creative workspace. Generate, refine, and perfect audio loops.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoopFactory AI — AI-Powered Loop Optimization & Creative Workspace',
    description: 'AI-powered loop optimization and creative workspace. Generate, refine, and perfect audio loops.',
  },
  alternates: {
    canonical: 'https://loopfactory.ai',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoopFactory AI',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Web',
  url: 'https://loopfactory.ai',
  description: 'AI-powered loop optimization and creative workspace. Generate, refine, and perfect audio loops.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <a href="/" className="text-lg font-bold">
              <span className="text-brand-400">LoopFactory</span>
              <span className="text-white">.AI</span>
            </a>
          </div>
          
          <MobileMenu />
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="/chat" className="text-muted-foreground hover:text-foreground transition-colors">Chat</a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                      <a href="/protocols" className="text-muted-foreground hover:text-foreground transition-colors">Protocols</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <a href="/chat" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg gradient-brand text-white hover:opacity-90 transition-opacity">
              Try Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-xs text-muted-foreground">
          <p>© 2026 LoopFactory.AI — Agent Marketplace Platform</p>
          <p className="mt-2">Part of 25 .ai domain portfolio</p>
        </div>
      </div>
    </footer>
  );
}
