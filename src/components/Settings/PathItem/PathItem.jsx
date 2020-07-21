import React from 'react';
import s from './PathItem.module.css';

import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { connect } from 'react-redux';
import { removePath } from 'app/store/settings/settingsActions';

function PathItem({ id, path, removePath }) {
  return (
    <div className={s.item}>
      <div className={s.itemText}>{path}</div>
      <IconButton size='small' color='inherit' onClick={() => removePath(id)}>
        <Close fontSize='small' />
      </IconButton>
    </div>
  );
}

const mapDispatchToProps = {
  removePath,
};

export default connect(null, mapDispatchToProps)(PathItem);
