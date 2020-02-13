import React from 'react';
import s from './ServersBox.module.css';

import { useMountEffect } from 'app/hooks/useMountEffect';

import { FormGroup, FormControlLabel } from '@material-ui/core';
import CustomCheckbox from 'com/Common/CustomCheckbox';

import { connect } from 'react-redux';
import { setStateCheckbox, enableCheckbox } from 'app/store/settings/settingsActions';

import sh from 'app/utils/settings-handler';

function ServersBox({ servers, setStateCheckbox, enableCheckbox }) {
  useMountEffect(() => {
    async function ue() {
      const settings = await sh.read();

      settings.servers.forEach(({ id, checked }) => {
        if (checked) enableCheckbox(id);
      });
    }
    ue();
  });

  return (
    <div className={s.box}>
      <FormGroup row>
        {servers.map(({ id, name, checked }) => {
          return (
            <FormControlLabel
              control={
                <CustomCheckbox
                  color='default'
                  value={name}
                  checked={checked}
                  onChange={() => setStateCheckbox(id)}
                />
              }
              className={s.label}
              label={name}
              key={id}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}

const mapStateToProps = ({ settings: { servers } }) => ({ servers });
const mapDispatchToProps = {
  setStateCheckbox,
  enableCheckbox
};

export default connect(mapStateToProps, mapDispatchToProps)(ServersBox);
