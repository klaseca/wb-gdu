import React from 'react';
import s from './CardAss.module.css';
import { FormGroup, FormControlLabel } from '@material-ui/core';

import Card from 'com/Settings/Card/Card';
import CustomCheckbox from 'com/Common/CustomCheckbox';

import { connect } from 'react-redux';
import { setStateCheckbox } from 'app/store/settings/settingsActions';

function CardAss({ servers, setStateCheckbox }) {
  const multiSetStateCheckbox = async (id) => {
    setStateCheckbox(id);
  };

  return (
    <Card title={'Auto servers select'}>
      <FormGroup className={s.group} row>
        {servers.map(({ id, name, checked }) => {
          return (
            <FormControlLabel
              control={
                <CustomCheckbox
                  color='default'
                  value={name}
                  checked={checked}
                  onChange={() => multiSetStateCheckbox(id)}
                />
              }
              className={s.label}
              label={name}
              key={id}
            />
          );
        })}
      </FormGroup>
      </Card>
  );
}

const mapStateToProps = ({ settings: { servers } }) => ({
  servers,
});

const mapDispatchToProps = {
  setStateCheckbox,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardAss);
