import React from 'react';
import s from './Header.module.css';

import { ReactComponent as Close } from 'com/Common/Icons/close.svg';

export default function Header() {
  const closeApp = () => {
    const {
      remote: { getCurrentWindow }
    } = require('electron');

    getCurrentWindow().close();
  };

  const cm = e => e.preventDefault();

  return (
    <header className={s.header} onContextMenu={cm}>
      <div className={s.box} onClick={closeApp}>
        <Close />
      </div>
    </header>
  );
}
