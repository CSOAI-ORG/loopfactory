import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: "Common questions about LoopFactory AI — what it is, how it works, costs and getting started.",
};

const jsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is LoopFactory AI?", "acceptedAnswer": {"@type": "Answer", "text": "LoopFactory AI is AI-powered loop optimization and creative workspace. It uses AI-assisted tooling to handle the matching, scheduling and busywork so you get results without the overhead."}}, {"@type": "Question", "name": "How does it work?", "acceptedAnswer": {"@type": "Answer", "text": "You describe what you need; the system matches, schedules and confirms automatically, and keeps you updated. No phone-tag, no waiting on callbacks."}}, {"@type": "Question", "name": "How much does LoopFactory AI cost?", "acceptedAnswer": {"@type": "Answer", "text": "Plans and current pricing are published on the pricing page. There are no hidden fees; subscriptions are billed through Stripe and cancellable anytime."}}, {"@type": "Question", "name": "How do I get started?", "acceptedAnswer": {"@type": "Answer", "text": "Use the request-a-quote button on the home page, or reach Council of AI at https://councilof.ai for details on plans and availability."}}]};

export default function FAQ() {
  return (
    <main>
      <header className="hero">
        <h1><span>FAQ</span> — LoopFactory AI</h1>
        <p>Straight answers about ai-powered loop optimization and creative workspace.</p>
      </header>
      <section className="section">
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="grid">
      <div className="card"><h3>What is LoopFactory AI?</h3><p>LoopFactory AI is AI-powered loop optimization and creative workspace. It uses AI-assisted tooling to handle the matching, scheduling and busywork so you get results without the overhead.</p></div>
      <div className="card"><h3>How does it work?</h3><p>You describe what you need; the system matches, schedules and confirms automatically, and keeps you updated. No phone-tag, no waiting on callbacks.</p></div>
      <div className="card"><h3>How much does LoopFactory AI cost?</h3><p>Plans and current pricing are published on the pricing page. There are no hidden fees; subscriptions are billed through Stripe and cancellable anytime.</p></div>
      <div className="card"><h3>How do I get started?</h3><p>Use the request-a-quote button on the home page, or reach Council of AI at https://councilof.ai for details on plans and availability.</p></div>
        </div>
      </section>
      <footer>© {new Date().getFullYear()} LoopFactory AI · Part of the <a href="https://councilof.ai">CSOAI</a> estate</footer>
    </main>
  );
}
