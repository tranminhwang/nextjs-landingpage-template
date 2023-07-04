import { Inter } from 'next/font/google';
import { NextIntlClientProvider, createTranslator } from 'next-intl';
import getDictionary from '@/lib/dictionaries';
import ReduxProvider from '@/components/ReduxProvider';
import { locales } from '@/constants/common';

const inter = Inter({ subsets: ['latin'] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>{children}</ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getDictionary(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
  };
}
