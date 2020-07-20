import React from 'react';
import { Radio, withStyles } from '@material-ui/core';

const TypeUpdateRadio = withStyles({
  root: {
    color: '#a5a5a5',
    '&$checked': {
      color: '#90CAF9',
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);

export default TypeUpdateRadio;
