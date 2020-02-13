import React from 'react';
import s from './MultiBlockPanel.module.css';

import FieldsetDut from './../FieldsetDut/FieldsetDut';
import FieldsetAss from './../FieldsetAss/FieldsetAss';
import FieldsetSp from './../FieldsetSp/FieldsetSp';
import FieldsetMss from './../FieldsetMss/FieldsetMss';

import { useMountEffect } from 'app/hooks/useMountEffect';

import { connect } from 'react-redux';
import { setAutoUpdateType, enableCheckbox } from 'app/store/settings/settingsActions';

import sh from 'app/utils/settings-handler';

function MultiBlockPanel({ setAutoUpdateType, enableCheckbox }) {
  useMountEffect(() => {
    async function ue() {
      const settings = await sh.read();

      setAutoUpdateType(settings.defaultUpdateType);

      settings.servers.forEach(({ id, checked }) => {
        if (checked) enableCheckbox(id);
      });
    }
    ue();
  });

  return (
    <div className={s.box}>
      <FieldsetDut />
      <FieldsetAss />
      <FieldsetMss />
      <FieldsetSp />
    </div>
  );
}

const mapDispatchToProps = {
  setAutoUpdateType,
  enableCheckbox
};

export default connect(null, mapDispatchToProps)(MultiBlockPanel);
