import React from 'react';
import s from './InputData.module.css';

import TextArea from './../TextArea';
import { Snackbar, Grow } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ManualServers from './../ManualServers/ManualServers';

import { connect } from 'react-redux';
import { setValue, setIsToast } from 'app/store/main/mainActions';

function InputData({
  value,
  setValue,
  isToast,
  severity,
  text,
  setIsToast
}) {
  const closeToast = () => {
    setIsToast(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        TransitionComponent={Grow}
        open={isToast}
        autoHideDuration={6000}
        onClose={closeToast}>
        <Alert severity={severity} variant='filled' onClose={closeToast}>
          {text}
        </Alert>
      </Snackbar>

      <ManualServers />

      <div className={s.box}>
        <TextArea
          multiline
          label='New data'
          margin='normal'
          variant='filled'
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
}

const mapStateToProps = ({
  main: {
    value,
    isToast,
    toastData: { text, severity }
  }
}) => ({ value, isToast, text, severity });

const mapDispatchToProps = {
  setValue,
  setIsToast
};

export default connect(mapStateToProps, mapDispatchToProps)(InputData);
