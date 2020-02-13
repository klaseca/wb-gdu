import React from 'react';
import s from './PathsPanel.module.css';
import { useMountEffect } from 'app/hooks/useMountEffect';

import PathInput from './../PathInput';
import PathsList from './../PathsList/PathsList';
import CustomButton from 'com/Common/CustomButton';

import { connect } from 'react-redux';
import { setPath, setPaths, resetPath, addPath } from 'app/store/settings/settingsActions';

import sh from 'app/utils/settings-handler';
import uuid from 'uuid/v4';

function PathsPanel({
  pathValue,
  setPath,
  resetPath,
  isSinglePaths,
  paths,
  setPaths,
  addPath
}) {
  useMountEffect(() => {
    async function ue() {
      const settings = await sh.read();

      if (isSinglePaths) {
        setPaths(settings.singlePaths);
      } else {
        setPaths(settings.multiPaths);
      }
    }
    ue();
  });

  const multiAddPath = async () => {
    const path = { id: uuid(), path: pathValue };

    addPath(path);

    const settings = await sh.read();

    if (isSinglePaths) {
      settings.singlePaths.push(path);
    } else {
      settings.multiPaths.push(path);
    }

    await sh.save(settings);

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
  settings: { pathValue, isSinglePaths, paths }
}) => ({ pathValue, isSinglePaths, paths });

const mapDispatchToProps = {
  setPath,
  setPaths,
  resetPath,
  addPath
};

export default connect(mapStateToProps, mapDispatchToProps)(PathsPanel);
