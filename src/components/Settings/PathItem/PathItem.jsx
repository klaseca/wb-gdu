import React from 'react';
import s from './PathItem.module.css';

import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { connect } from 'react-redux';
import { setPaths } from 'app/store/settings/settingsActions';

import sh from 'app/utils/settings-handler';

function PathItem({ id, path, setPaths, paths, isSinglePaths }) {
  const multiRemovePath = async id => {
    const newPaths = paths.filter(path => path.id !== id);

    setPaths(newPaths);

    const settings = await sh.read();

    if (isSinglePaths) {
      settings.singlePaths = newPaths;
    } else {
      settings.multiPaths = newPaths;
    }

    await sh.save(settings);
  };

  return (
    <div className={s.item}>
      <div className={s.itemText}>{path}</div>
      <IconButton size='small' color='inherit' onClick={() => multiRemovePath(id)}>
        <Close fontSize='small' />
      </IconButton>
    </div>
  );
}

const mapStateToProps = ({ settings: { paths, isSinglePaths } }) => ({
  paths,
  isSinglePaths
});

const mapDispatchToProps = {
  setPaths
};

export default connect(mapStateToProps, mapDispatchToProps)(PathItem);
