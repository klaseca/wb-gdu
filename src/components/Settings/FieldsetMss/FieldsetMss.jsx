import React from 'react';
import s from './FieldsetDut.module.css';
import { FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

import Fieldset from 'com/Common/Fieldset';
import TypeUpdateRadio from '../../Common/TypeUpdateRadio';

import { connect } from 'react-redux';
import { setManualUpdateServer } from 'app/store/settings/settingsActions';

import sh from 'app/utils/settings-handler';

function FieldsetMss({ manualUpdateServer, setManualUpdateServer }) {
  const multiSetManualUpadteType = async ({ target: { value } }) => {
    setManualUpdateServer(value);

    const settings = await sh.read();
    settings.manualUpdateServer = value;
    await sh.save(settings);
  };

  return (
    <Fieldset component='fieldset'>
      <FormLabel component='legend' className={s.legend}>
        Manual update type
      </FormLabel>
      <RadioGroup
        row
        className={s.group}
        name='type-update'
        value={manualUpdateServer}
        onChange={multiSetManualUpadteType}>
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
    </Fieldset>
  );
}

const mapStateToProps = ({ settings: { manualUpdateServer } }) => ({
  manualUpdateServer
});

const mapDispatchToProps = {
  setManualUpdateServer
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsetMss);
