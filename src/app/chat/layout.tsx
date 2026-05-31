import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat — LoopFactory AI',
  description: 'Get in touch with LoopFactory AI. Live chat coming soon.',
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}
