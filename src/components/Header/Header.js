import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <h1>CryptoCreator</h1>
    </div>
  );
}
