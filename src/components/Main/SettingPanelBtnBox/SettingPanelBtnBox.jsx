import React from 'react';
import s from './SettingPanelBtnBox.module.css';
import { withRouter } from 'react-router-dom';

import CustomButton from 'com/Common/CustomButton';

const SaveRouter = withRouter(({ history }) => (
  <CustomButton
    bg='rgb(130, 192, 112)'
    hoverBg='rgb(99, 168, 80)'
    onClick={() => history.push('/')}>
    Save
  </CustomButton>
));

export default function SettingPanelBtnBox() {
  return (
    <div className={s.box}>
      <SaveRouter />
      <CustomButton>Close</CustomButton>
    </div>
  );
}
