import classNames from 'classnames';
import React from 'react';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

const defaultStyles = 'tracking-[0.1px] my-4';

export function HeadingOne({ className, ...props }: HeadingProps) {
  return (
    <h1
      {...props}
      className={classNames(
        className,
        'text-4xl md:text-5xl lg:text-6xl font-bold',
        defaultStyles,
      )}
    />
  );
}

export function HeadingTwo({ className, ...props }: HeadingProps) {
  return (
    <h2
      {...props}
      className={classNames(
        className,
        'text-3xl md:text-4xl font-extrabold',
        defaultStyles,
      )}
    />
  );
}

export function HeadingThree({ className, ...props }: HeadingProps) {
  return (
    <h3
      {...props}
      className={classNames(
        className,
        'text-2xl md:text-3xl font-bold',
        defaultStyles,
      )}
    />
  );
}

export function HeadingFour({ className, ...props }: HeadingProps) {
  return (
    <h4
      {...props}
      className={classNames(className, 'text-xl font-extrabold', defaultStyles)}
    />
  );
}

export function HeadingFive({ className, ...props }: HeadingProps) {
  return (
    <h5
      {...props}
      className={classNames(className, 'text-lg font-semibold', defaultStyles)}
    />
  );
}

export function HeadingSix({ className, ...props }: HeadingProps) {
  return (
    <h6
      {...props}
      className={classNames(className, 'text-base font-bold', defaultStyles)}
    />
  );
}
