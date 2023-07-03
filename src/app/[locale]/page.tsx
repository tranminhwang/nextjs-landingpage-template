'use client';

import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';

export default async function Home() {
  const t = useTranslations('Products');

  return (
    <main className="h-screen w-screen xs:bg-red-500 sm:bg-yellow-500 md:bg-green-500 lg:bg-orange-500 xl:bg-black 2xl:bg-pink-500">
      <h1> Home Page</h1>
      <p>{t('cart')}</p>
      <NavigationLink href="/example">Example</NavigationLink>
    </main>
  );
}
