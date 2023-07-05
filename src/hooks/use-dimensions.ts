import { useEffect, useState } from 'react';

export enum ScreenType {
  XXS = 'xxs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

const useDimensions = () => {
  const [screenType, setScreenType] = useState('');

  const handleResize = () => {
    const { innerWidth } = window;
    if (innerWidth >= 1536) {
      setScreenType(ScreenType.XXL);
    } else if (innerWidth >= 1280) {
      setScreenType(ScreenType.XL);
    } else if (innerWidth >= 1024) {
      setScreenType(ScreenType.LG);
    } else if (innerWidth >= 768) {
      setScreenType(ScreenType.MD);
    } else if (innerWidth >= 640) {
      setScreenType(ScreenType.SM);
    } else if (innerWidth >= 475) {
      setScreenType(ScreenType.XS);
    } else {
      setScreenType(ScreenType.XXS);
    }
  };

  useEffect(() => {
    const resizeEvent = 'resize';
    handleResize();
    window.addEventListener(resizeEvent, handleResize);
    return () => window.removeEventListener(resizeEvent, handleResize);
  }, []);

  return {
    screenType,
    isMobile: screenType === ScreenType.XS || screenType === ScreenType.XXS,
    isTablet: screenType === ScreenType.SM || screenType === ScreenType.MD,
    isDesktop:
      screenType === ScreenType.LG ||
      screenType === ScreenType.XL ||
      screenType === ScreenType.XXL,
  };
};

export default useDimensions;
