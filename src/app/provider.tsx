'use client';

import { TransitionProvider } from '@/components/transition-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <TransitionProvider>{children}</TransitionProvider>;
}
