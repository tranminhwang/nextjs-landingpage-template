'use client';

import Error from 'next/error';
import { defaultLocale } from '@/constants/common';

// This page renders when a route is requested that doesn't match the
// middleware and therefore doesn't have a locale associated with it.

export default function RootPageNotFound() {
  return (
    <html lang={defaultLocale}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
