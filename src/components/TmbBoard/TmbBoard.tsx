import React from 'react';

interface Props {
  className?: string;
}

export const TmbBoard: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
