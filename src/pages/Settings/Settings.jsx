import React from 'react';
import s from './Settings.module.css';
import { withRouter } from 'react-router-dom';

import MultiBlockPanel from 'com/Settings/MultiBlockPanel/MultiBlockPanel';
import PathsPanel from 'app/components/Settings/PathsPanel/PathsPanel';
import CustomButton from 'com/Common/CustomButton'

import { connect } from 'react-redux';
import { setShowSelectBlock } from 'app/store/settings/settingsActions';

function Settings({ showBlock, setShowSelectBlock }) {
  const ReturnRouter = withRouter(({ history }) => {
    const returnFn = showBlock ? () => history.push('/') : () => setShowSelectBlock();
    return <CustomButton onClick={returnFn}>Return</CustomButton>
  });
  
  return (
    <div className={s.app}>
      <div className={s.h1}>Settings</div>

      {showBlock && <MultiBlockPanel />}
      {!showBlock && <PathsPanel />}

      <div className={s.btnBox}>
        <ReturnRouter />
      </div>
    </div>
  );
}

const mapStateToProps = ({ settings: { showBlock } }) => ({ showBlock });

const mapDispatchToProps = {
  setShowSelectBlock
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
