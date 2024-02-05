import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Next Joy UI',
  description: 'A Next Js & Joy UI starter template',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{props.children}</ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}
