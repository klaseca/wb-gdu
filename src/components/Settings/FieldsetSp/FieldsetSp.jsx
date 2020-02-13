import React from 'react';
import s from './FieldsetSp.module.css';

import { FormLabel } from '@material-ui/core';

import Fieldset from 'com/Common/Fieldset';
import CustomButton from 'com/Common/CustomButton';

import { connect } from 'react-redux';
import { setIsSinglePaths, setShowSelectBlock } from 'app/store/settings/settingsActions';

function FieldsetSp({ setIsSinglePaths, setShowSelectBlock }) {
  const settingPaths = [
    {
      id: 1,
      name: 'Single paths'
    },
    {
      id: 2,
      name: 'Multi paths'
    }
  ];

  const setValues = name => {
    if (name === 'Single paths') {
      setIsSinglePaths(true);
    } else {
      setIsSinglePaths(false);
    }

    setShowSelectBlock();
  };

  return (
    <Fieldset component='fieldset'>
      <FormLabel component='legend' className={s.legend}>
        Settings path
      </FormLabel>
      <div className={s.fsBox}>
        {settingPaths.map(path => (
          <CustomButton key={path.id} onClick={() => setValues(path.name)}>
            {path.name}
          </CustomButton>
        ))}
      </div>
    </Fieldset>
  );
}

const mapDispatchToProps = {
  setShowSelectBlock,
  setIsSinglePaths
};

export default connect(null, mapDispatchToProps)(FieldsetSp);
