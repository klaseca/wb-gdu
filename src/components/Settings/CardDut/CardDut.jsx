import React from 'react';
import s from './CardDut.module.css';
import { RadioGroup, FormControlLabel } from '@material-ui/core';

import Card from 'com/Settings/Card/Card';
import TypeUpdateRadio from 'com/Common/TypeUpdateRadio';

import { connect } from 'react-redux';
import { setAutoUpdateType } from 'app/store/settings/settingsActions';

function CardDut({ defaultUpdateType, setAutoUpdateType }) {
  const multiSetAutoUpadteType = async ({ target: { value } }) => {
    setAutoUpdateType(value);
  };

  return (
    <Card title={'Default update type'}>
      <RadioGroup
        row
        className={s.group}
        name='type-update'
        value={defaultUpdateType}
        onChange={multiSetAutoUpadteType}
      >
        <FormControlLabel
          className={s.label}
          value='none'
          control={<TypeUpdateRadio />}
          label='None'
        />
        <FormControlLabel
          className={s.label}
          value='auto'
          control={<TypeUpdateRadio />}
          label='Auto'
        />
        <FormControlLabel
          className={s.label}
          value='manual'
          control={<TypeUpdateRadio />}
          label='Manual'
        />
      </RadioGroup>
    </Card>
  );
}

const mapStateToProps = ({ settings: { defaultUpdateType } }) => ({
  defaultUpdateType,
});

const mapDispatchToProps = {
  setAutoUpdateType,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDut);
