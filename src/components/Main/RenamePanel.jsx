import React from 'react';
import styles from './s.module.css';
import ServersBox from './ServersBox/ServersBox';
import InputData from './InputData/InputData';
import RenamePanelBtnBox from './RenamePanelBtnBox/RenamePanelBtnBox';

export default function RenamePanel() {
  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Server Data</h1>
      <ServersBox />
      <InputData />
      <RenamePanelBtnBox />
    </div>
  );
}
