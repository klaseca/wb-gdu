import React from 'react';
import s from './PathsPanel.module.css';

import PathInput from 'com/Settings/PathInput';
import PathsList from 'com/Settings/PathsList/PathsList';
import CustomButton from 'com/Common/CustomButton';

import { connect } from 'react-redux';
import {
  setPath,
  resetPath,
  addPath,
} from 'app/store/settings/settingsActions';
import { setIsToast, setToastData } from 'app/store/main/mainActions';

import uuid from 'uuid/v4';

function PathsPanel({
  pathValue,
  setPath,
  resetPath,
  isSinglePaths,
  singlePaths,
  multiPaths,
  addPath,
  setIsToast,
  setToastData,
}) {
  const paths = isSinglePaths ? singlePaths : multiPaths;

  const multiAddPath = async () => {
    if (pathValue.trim() === '') {
      setToastData({ text: 'Enter the path', severity: 'warning' });
      setIsToast(true);

      return;
    }

    const path = { id: uuid(), path: pathValue };

    addPath(path);

    resetPath();
  };

  return (
    <div className={s.box}>
      <div className={s.main}>
        <PathsList paths={paths} />
      </div>
      <div className={s.btnBox}>
        <div className={s.inputBox}>
          <PathInput
            value={pathValue}
            onChange={setPath}
            label='Path'
            margin='normal'
            variant='filled'
          />
        </div>
        <CustomButton className={s.btn} onClick={multiAddPath}>
          Add
        </CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = ({
  settings: { pathValue, isSinglePaths, singlePaths, multiPaths },
}) => ({ pathValue, isSinglePaths, singlePaths, multiPaths });

const mapDispatchToProps = {
  setPath,
  resetPath,
  addPath,
  setIsToast,
  setToastData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PathsPanel);
