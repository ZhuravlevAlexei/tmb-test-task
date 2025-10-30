import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AppProviders: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default AppProviders;
