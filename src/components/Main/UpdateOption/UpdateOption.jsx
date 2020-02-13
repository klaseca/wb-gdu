import React from 'react';
import s from './UpdateOption.module.css';

import { ReactComponent as Hand } from 'com/Common/Icons/hand.svg';
import { ReactComponent as Auto } from 'com/Common/Icons/update.svg';

import { connect } from 'react-redux';
import { setShowSelectBlock, setIsAutoUpdate } from 'app/store/main/mainActions';

function UpdateOption({ name, component, setShowSelectBlock, setIsAutoUpdate }) {
  const setValues = () => {
    if (name === 'Auto update') {
      setIsAutoUpdate(true);
    } else {
      setIsAutoUpdate(false);
    }

    setShowSelectBlock();
  };

  const Icon = () => {
    return component === 'hand' ? <Hand /> : <Auto />;
  }

  return (
    <div className={s.box} onClick={setValues}>
      <div className={s.imgBox}>
        <Icon />
      </div>
      <div className={s.name}>{name}</div>
    </div>
  );
}

const mapDispatchToProps = {
  setShowSelectBlock,
  setIsAutoUpdate
};

export default connect(null, mapDispatchToProps)(UpdateOption);
