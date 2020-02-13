import React from 'react';
import s from './UpdateOptions.module.css';
import { withRouter } from 'react-router-dom';

import CustomButton from 'com/Common/CustomButton';
import UpdateOption from './../UpdateOption/UpdateOption';

const SettingsRouter = withRouter(({ history }) => (
  <CustomButton onClick={() => history.push('/settings')}>
    Settings
  </CustomButton>
));

export default function UpdateOptions() {
  const updateOptions = [
    {
      id: 1,
      name: 'Auto update',
      component: 'auto'
    },
    {
      id: 2,
      name: 'Manual update',
      component: 'hand'
    }
  ];

  return (
    <>
      <div className={s.block}>
        {updateOptions.map(option => (
          <UpdateOption
            key={option.id}
            name={option.name}
            component={option.component}
          />
        ))}
      </div>
      <div className={s.btnBox}>
        <SettingsRouter />
      </div>
    </>
  );
}
