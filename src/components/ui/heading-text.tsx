import classNames from 'classnames';
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const defaultStyles = 'tracking-[0.1px] my-4';

export function HeadingOne({ children, className }: HeadingProps) {
  return (
    <h1
      className={classNames(
        className,
        'text-4xl md:text-5xl lg:text-6xl font-bold',
        defaultStyles,
      )}>
      {children}
    </h1>
  );
}

export function HeadingTwo({ children, className }: HeadingProps) {
  return (
    <h2
      className={classNames(
        className,
        'text-3xl md:text-4xl font-extrabold',
        defaultStyles,
      )}>
      {children}
    </h2>
  );
}

export function HeadingThree({ children, className }: HeadingProps) {
  return (
    <h3
      className={classNames(
        className,
        'text-2xl md:text-3xl font-bold',
        defaultStyles,
      )}>
      {children}
    </h3>
  );
}

export function HeadingFour({ children, className }: HeadingProps) {
  return (
    <h4
      className={classNames(
        className,
        'text-xl font-extrabold',
        defaultStyles,
      )}>
      {children}
    </h4>
  );
}

export function HeadingFive({ children, className }: HeadingProps) {
  return (
    <h5
      className={classNames(className, 'text-lg font-semibold', defaultStyles)}>
      {children}
    </h5>
  );
}

export function HeadingSix({ children, className }: HeadingProps) {
  return (
    <h6 className={classNames(className, 'text-base font-bold', defaultStyles)}>
      {children}
    </h6>
  );
}
