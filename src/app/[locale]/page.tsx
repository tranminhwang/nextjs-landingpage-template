'use client';

import { useTranslations } from 'next-intl';
import ContainerWrap from '@/components/ui/container-wrap';
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
} from '@/components/ui/heading-text';
import classNames from 'classnames';

export default async function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="min-h-screen">
      <ContainerWrap>
        <HeadingOne
          className={classNames(
            'text-red-500 xs:text-blue-500 sm:text-green-500 md:text-yellow-500 lg:text-indigo-500 xl:text-purple-500 2xl:text-orange-500',
          )}>
          {t('title')}
        </HeadingOne>
        <HeadingTwo
          className={classNames(
            'text-red-500 xs:text-blue-500 sm:text-green-500 md:text-yellow-500 lg:text-indigo-500 xl:text-purple-500 2xl:text-orange-500',
          )}>
          {t('title')}
        </HeadingTwo>{' '}
        <HeadingThree
          className={classNames(
            'text-red-500 xs:text-blue-500 sm:text-green-500 md:text-yellow-500 lg:text-indigo-500 xl:text-purple-500 2xl:text-orange-500',
          )}>
          {t('title')}
        </HeadingThree>
        <HeadingFour
          className={classNames(
            'text-red-500 xs:text-blue-500 sm:text-green-500 md:text-yellow-500 lg:text-indigo-500 xl:text-purple-500 2xl:text-orange-500',
          )}>
          {t('title')}
        </HeadingFour>
        <HeadingFive
          className={classNames(
            'text-red-500 xs:text-blue-500 sm:text-green-500 md:text-yellow-500 lg:text-indigo-500 xl:text-purple-500 2xl:text-orange-500',
          )}>
          {t('title')}
        </HeadingFive>
        <HeadingSix
          className={classNames(
            'text-red-500 xs:text-blue-500 sm:text-green-500 md:text-yellow-500 lg:text-indigo-500 xl:text-purple-500 2xl:text-orange-500',
          )}>
          {t('title')}
        </HeadingSix>
      </ContainerWrap>
    </main>
  );
}
