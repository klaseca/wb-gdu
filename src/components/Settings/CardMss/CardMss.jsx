import React from 'react';
import s from './CardMss.module.css';
import { RadioGroup, FormControlLabel } from '@material-ui/core';

import Card from 'com/Settings/Card/Card';
import TypeUpdateRadio from 'com/Common/TypeUpdateRadio';

import { connect } from 'react-redux';
import { setManualUpdateServer } from 'app/store/settings/settingsActions';

function CardMss({ manualUpdateServer, setManualUpdateServer }) {
  const multiSetManualUpadteType = async ({ target: { value } }) => {
    setManualUpdateServer(value);
  };

  return (
    <Card title={'Manual update type'}>
      <RadioGroup
        row
        className={s.group}
        name='type-update'
        value={manualUpdateServer}
        onChange={multiSetManualUpadteType}
      >
        <FormControlLabel
          className={s.label}
          value='ru-alpha'
          control={<TypeUpdateRadio />}
          label='ru-alpha'
        />
        <FormControlLabel
          className={s.label}
          value='ru-bravo'
          control={<TypeUpdateRadio />}
          label='ru-bravo'
        />
        <FormControlLabel
          className={s.label}
          value='ru-charlie'
          control={<TypeUpdateRadio />}
          label='ru-charlie'
        />
      </RadioGroup>
    </Card>
  );
}

const mapStateToProps = ({ settings: { manualUpdateServer } }) => ({
  manualUpdateServer,
});

const mapDispatchToProps = {
  setManualUpdateServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMss);
