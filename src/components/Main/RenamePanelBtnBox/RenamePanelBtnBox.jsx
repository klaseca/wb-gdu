import React from 'react';
import s from './RenamePanelBtnBox.module.css';

import CustomButton from 'com/Common/CustomButton';

import { connect } from 'react-redux';
import {
  setShowSelectBlock,
  setToastData,
  setIsToast,
  resetValue
} from 'app/store/main/mainActions';

import sh from 'app/utils/settings-handler';

function RenamePanelBtnBox({
  isAutoUpdate,
  setShowSelectBlock,
  value,
  resetValue,
  setToastData,
  setIsToast,
  manualUpdateServer
}) {
  const saveData = async () => {
    if (value.trim() === '') {
      setToastData({ text: 'Need to enter data', severity: 'warning' });
      setIsToast(true);
    } else {
      const data = [[manualUpdateServer, value]];

      const isSuccess = await sh.updateGameData(data);

      if (isSuccess) {
        setToastData({ text: 'Game data updated', severity: 'success' });
        setIsToast(true);
        resetValue();
      } else {
        setToastData({
          text: 'Check the paths are correct',
          severity: 'error'
        });
        setIsToast(true);
      }
    }
  };

  return (
    <div className={s.box}>
      {!isAutoUpdate && (
        <CustomButton onClick={saveData} bg='rgb(130, 192, 112)' hoverBg='rgb(99, 168, 80)'>
          Save data
        </CustomButton>
      )}
      <CustomButton onClick={setShowSelectBlock}>Return</CustomButton>
    </div>
  );
}

const mapStateToProps = ({
  main: {
    isAutoUpdate,
    value
  },
  settings: { manualUpdateServer }
}) => ({ isAutoUpdate, value, manualUpdateServer });

const mapDispatchToProps = {
  setShowSelectBlock,
  setToastData,
  setIsToast,
  resetValue
};

export default connect(mapStateToProps, mapDispatchToProps)(RenamePanelBtnBox);
