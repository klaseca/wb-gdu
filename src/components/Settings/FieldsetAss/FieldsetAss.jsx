import React from 'react';
import s from './FieldsetAss.module.css';
import { FormGroup, FormLabel, FormControlLabel } from '@material-ui/core';

import Fieldset from 'com/Common/Fieldset';
import CustomCheckbox from 'com/Common/CustomCheckbox';

import { connect } from 'react-redux';
import { setStateCheckbox } from 'app/store/settings/settingsActions';

import sh from 'app/utils/settings-handler';

function FieldsetAss({ servers, setStateCheckbox }) {
  const multiSetStateCheckbox = async id => {
    setStateCheckbox(id);

    const settings = await sh.read();
    const newServers = settings.servers.map(server => {
      if (server.id === id) server.checked = !server.checked;
      return server;
    });
    settings.servers = newServers;

    await sh.save(settings);
  };

  return (
    <Fieldset component='fieldset'>
      <FormLabel component='legend' className={s.legend}>
        Auto servers select
      </FormLabel>
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
    </Fieldset>
  );
}

const mapStateToProps = ({ settings: { servers } }) => ({
  servers
});

const mapDispatchToProps = {
  setStateCheckbox
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsetAss);
