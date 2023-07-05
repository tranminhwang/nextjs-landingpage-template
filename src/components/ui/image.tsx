import React, { useRef } from 'react';
import NextImage from 'next/image';
import classNames from 'classnames';

type ImageProps = React.ComponentProps<typeof NextImage>;

const Image = ({ className, ...props }: ImageProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="inline-block animate-pulse bg-gray-200 rounded-lg"
      style={{
        height: props.height,
        width: props.width,
      }}>
      <NextImage
        {...props}
        style={{ height: props.height }}
        className={classNames(
          className,
          `object-cover rounded-lg transition-opacity opacity-0 duration-[1.5s] esease-in-out`,
        )}
        onLoadingComplete={(image) => {
          image.classList.remove('opacity-0');
          ref.current?.classList.remove(
            'animate-pulse',
            'bg-gray-200',
            'rounded-lg',
          );
          ref.current?.removeAttribute('style');
        }}
      />
    </div>
  );
};

export default Image;
