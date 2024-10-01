import { fetchWebsiteDetails } from '@/lib/utils';
import type { Metadata } from 'next';
import { ContextProvider } from '../app/context/websiteProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'MST',
  description: 'Music',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetchWebsiteDetails();

  return (
    <html lang='en'>
      <body className='antialiased'>
        <ContextProvider data={data}>{children}</ContextProvider>
      </body>
    </html>
  );
}
