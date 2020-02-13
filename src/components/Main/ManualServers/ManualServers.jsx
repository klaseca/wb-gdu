import React from 'react';
import s from './ManualServers.module.css';
import { RadioGroup, FormControlLabel } from '@material-ui/core';
import TypeUpdateRadio from 'com/Common/TypeUpdateRadio';

import { connect } from 'react-redux';
import { setManualUpdateServer } from 'app/store/settings/settingsActions';

function ManualServers({ manualUpdateServer, setManualUpdateServer }) {
  return (
    <RadioGroup
      row
      className={s.group}
      name='type-update'
      value={manualUpdateServer}
      onChange={({ target: { value } }) => setManualUpdateServer(value)}>
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
  );
}

const mapStateToProps = ({ settings: { manualUpdateServer } }) => ({
  manualUpdateServer
});

const mapDispatchToProps = {
  setManualUpdateServer
};

export default connect(mapStateToProps, mapDispatchToProps)(ManualServers);
