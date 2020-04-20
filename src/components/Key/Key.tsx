import React from 'react';

interface IProps {
  keyAction(): void;
  keyType: string;
  keyValue: string;
}
const Key = ({ keyAction, keyType, keyValue }: IProps) => {
  return <div className="key-container"></div>;
};

export default Key;
