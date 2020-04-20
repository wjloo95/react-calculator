import React from 'react';

interface IProps {
  keyAction(): void;
  keyType: string;
  keyValue: string;
}
const Key = ({ keyAction, keyType, keyValue }: IProps) => {
  return (
    <div className="key-container">
      <p className="key-value">{keyValue}</p>
    </div>
  );
};

export default Key;
