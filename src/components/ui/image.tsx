import React from 'react';
import NextImage from 'next/image';
import classNames from 'classnames';

type ImageProps = React.ComponentProps<typeof NextImage>;

const Image = ({ className, ...props }: ImageProps) => {
  return (
    <NextImage
      {...props}
      style={{
        height: props.height,
        width: props.width,
      }}
      className={classNames(className, `object-cover`)}
    />
  );
};

export default Image;
