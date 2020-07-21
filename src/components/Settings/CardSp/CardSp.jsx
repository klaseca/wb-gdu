import React from 'react';
import s from './CardSp.module.css';

import Card from 'com/Settings/Card/Card';
import CustomButton from 'com/Common/CustomButton';

import { connect } from 'react-redux';
import {
  setIsSinglePaths,
  setShowSelectBlock,
} from 'app/store/settings/settingsActions';

function CardSp({ setIsSinglePaths, setShowSelectBlock }) {
  const settingPaths = [
    {
      id: 1,
      name: 'Single paths',
    },
    {
      id: 2,
      name: 'Multi paths',
    },
  ];

  const setValues = (name) => {
    if (name === 'Single paths') {
      setIsSinglePaths(true);
    } else {
      setIsSinglePaths(false);
    }

    setShowSelectBlock();
  };

  return (
    <Card title={'Settings path'}>
      <div className={s.fsBox}>
        {settingPaths.map((path) => (
          <CustomButton key={path.id} onClick={() => setValues(path.name)}>
            {path.name}
          </CustomButton>
        ))}
      </div>
    </Card>
  );
}

const mapDispatchToProps = {
  setShowSelectBlock,
  setIsSinglePaths,
};

export default connect(null, mapDispatchToProps)(CardSp);
