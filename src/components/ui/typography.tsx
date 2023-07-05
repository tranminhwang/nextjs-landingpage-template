import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

type TextLinkProps = Partial<TextProps> & {
  href: string;
  target?: string;
};

export function TextLink({ children, ...props }: TextLinkProps) {
  if (props.target) {
    return (
      <a className={classNames(props.className)} {...props}>
        {children}
      </a>
    );
  }
  return <Link {...props}>{children}</Link>;
}
