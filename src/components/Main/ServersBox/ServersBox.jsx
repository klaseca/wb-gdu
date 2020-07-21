import React from 'react';
import s from './ServersBox.module.css';

import { FormGroup, FormControlLabel } from '@material-ui/core';
import CustomCheckbox from 'com/Common/CustomCheckbox';

import { connect } from 'react-redux';
import { setStateCheckbox } from 'app/store/settings/settingsActions';

function ServersBox({ servers, setStateCheckbox }) {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ServersBox);
