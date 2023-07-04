'use client';

import { useTranslations } from 'next-intl';

export default async function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="min-h-screen">
      <h1>{t('helloWorld')}</h1>
    </main>
  );
}
