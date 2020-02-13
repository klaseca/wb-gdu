import React from 'react';
import s from './Updater.module.css';
import InputData from './../InputData/InputData';
import AutoUpdate from './../AutoUpdate/AutoUpdate'
import RenamePanelBtnBox from './../RenamePanelBtnBox/RenamePanelBtnBox';

import { connect } from 'react-redux';

function Updater({ isAutoUpdate }) {
  return (
    <div className={s.app}>
      {isAutoUpdate && <AutoUpdate />}
      {!isAutoUpdate && <InputData />}
      <RenamePanelBtnBox />
    </div>
  );
}

const mapStateToProps = ({ main: { isAutoUpdate } }) => ({ isAutoUpdate });

export default connect(mapStateToProps)(Updater);
