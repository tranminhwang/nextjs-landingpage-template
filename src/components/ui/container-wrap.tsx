import classNames from 'classnames';
import React from 'react';

type ContainerWrapPros = React.HTMLAttributes<HTMLDivElement>;

const ContainerWrap = ({
  children,
  className,
  ...props
}: ContainerWrapPros) => {
  return (
    <div className={classNames(className, 'relative container')} {...props}>
      {children}
    </div>
  );
};

export default ContainerWrap;
