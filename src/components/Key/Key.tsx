import React from 'react';
import './Key.css';

interface IProps {
  keyAction(value: any): void;
  keyType: string;
  keyValue: string;
}
const Key = ({ keyAction, keyType, keyValue }: IProps) => {
  return (
    <div
      className={`key-container ${keyType}`}
      onClick={() => keyAction(keyValue)}
    >
      <p className="key-value">{keyValue}</p>
    </div>
  );
};

export default Key;
