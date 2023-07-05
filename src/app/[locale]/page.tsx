'use client';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import ContainerWrap from '@/components/ui/container-wrap';
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
} from '@/components/ui/heading-text';
import Image from '@/components/ui/image';

export default async function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="min-h-screen">
      <ContainerWrap>
        <Image
          width={384}
          height={192}
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
          alt="a"
          className={'rounded-md'}
        />
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
