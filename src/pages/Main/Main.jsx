import React from 'react';
import s from './Main.module.css';

import UpdateOptions from 'com/Main/UpdateOptions/UpdateOptions';
import Updater from 'com/Main/Updater/Updater';

import { connect } from 'react-redux';

function Main({ showBlock }) {
  return (
    <div className={s.app}>
      <div className={s.h1}>Warface bot</div>
      <div className={s.h2}>game data updater</div>
      {showBlock && <UpdateOptions />}
      {!showBlock && <Updater />}
    </div>
  );
}

const mapStateToProps = ({ main: { showBlock } }) => ({ showBlock });

export default connect(mapStateToProps)(Main);
