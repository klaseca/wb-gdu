import React from 'react';

import { Snackbar, Grow } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setIsToast } from 'app/store/main/mainActions';

export default function Toast() {
  const { isToast, text, severity } = useSelector(
    ({
      main: {
        isToast,
        toastData: { text, severity }
      }
    }) => ({
      isToast,
      text,
      severity
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const closeToast = () => {
    dispatch(setIsToast(false));
  };

  return (
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
  );
}
