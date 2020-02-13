import React from 'react';
import s from './FieldsetDut.module.css';
import { FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

import Fieldset from 'com/Common/Fieldset';
import TypeUpdateRadio from 'com/Common/TypeUpdateRadio';

import { connect } from 'react-redux';
import { setAutoUpdateType } from 'app/store/settings/settingsActions';

import sh from 'app/utils/settings-handler';

function FieldsetDut({ defaultUpdateType, setAutoUpdateType }) {
  const multiSetAutoUpadteType = async ({ target: { value } }) => {
    setAutoUpdateType(value);

    const settings = await sh.read();
    settings.defaultUpdateType = value;
    await sh.save(settings);
  };

  return (
    <Fieldset component='fieldset'>
      <FormLabel component='legend' className={s.legend}>
        Default update type
      </FormLabel>
      <RadioGroup
        row
        className={s.group}
        name='type-update'
        value={defaultUpdateType}
        onChange={multiSetAutoUpadteType}>
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
    </Fieldset>
  );
}

const mapStateToProps = ({ settings: { defaultUpdateType } }) => ({
  defaultUpdateType
});

const mapDispatchToProps = {
  setAutoUpdateType
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsetDut);
