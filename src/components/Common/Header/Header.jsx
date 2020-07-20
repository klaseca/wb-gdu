import React from 'react';
import s from './Header.module.css';

import { ReactComponent as Close } from 'com/Common/Icons/close.svg';

import { remote } from 'electron';
import { connect } from 'react-redux';

import sh from 'app/utils/settings-handler';

function Header({ settings }) {
  const closeApp = async () => {
    const { pathValue, showBlock, isSinglePaths, ...data } = settings;

    await sh.saveSettings(data);

    remote.getCurrentWindow().close();
  };

  const cm = (e) => e.preventDefault();

  return (
    <header className={s.header} onContextMenu={cm}>
      <div className={s.box} onClick={closeApp}>
        <Close />
      </div>
    </header>
  );
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(mapStateToProps)(Header);
