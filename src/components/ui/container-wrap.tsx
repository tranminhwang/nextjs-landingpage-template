import React from 'react';

const ContainerWrap = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative container">{children}</div>;
};

export default ContainerWrap;
