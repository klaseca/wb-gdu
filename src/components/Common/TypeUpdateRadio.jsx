import React from 'react';
import { Radio, withStyles } from '@material-ui/core';

const TypeUpdateRadio = withStyles({
  root: {
    color: '#a5a5a5',
    '&$checked': {
      color: 'rgb(112, 165, 185)'
    }
  },
  checked: {}
})(props => <Radio color='default' {...props} />);

export default TypeUpdateRadio;
