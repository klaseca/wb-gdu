import React from 'react';
import s from './Main.module.css';

import { useMountEffect } from 'app/hooks/useMountEffect';

import UpdateOptions from 'com/Main/UpdateOptions/UpdateOptions';
import Updater from 'com/Main/Updater/Updater';

import { connect } from 'react-redux';
import { setShowSelectBlock, setIsAutoUpdate } from 'app/store/main/mainActions';

import sh from 'app/utils/settings-handler';

function Main({ showBlock, setIsAutoUpdate, setShowSelectBlock }) {
  useMountEffect(() => {
    const ue = async () => {
      const { defaultUpdateType } = await sh.read();

      if (defaultUpdateType === 'auto') {
        setIsAutoUpdate(true);
        setShowSelectBlock();
      } else if (defaultUpdateType === 'manual') {
        setIsAutoUpdate(false);
        setShowSelectBlock();
      }
    };
    ue();
  });

  return (
    <div className={s.app}>
      <div className={s.h1}>Warface bot</div>
      <div className={s.h2}>game data updater</div>
      {showBlock && <UpdateOptions />}
      {!showBlock && <Updater />}
    </div>
  );
}

const mapStateToProps = ({ main: { showBlock } }) => ({ showBlock });

const mapDispatchToProps = {
  setIsAutoUpdate,
  setShowSelectBlock
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
