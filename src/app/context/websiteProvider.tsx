'use client';

import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren } from 'react';
import { WebsiteContext } from './context';

export function ContextProvider({
  children,
  data,
}: PropsWithChildren & { data: any }) {
  return (
    <>
      <WebsiteContext.Provider value={data}>{children}</WebsiteContext.Provider>
      <Toaster />
    </>
  );
}
