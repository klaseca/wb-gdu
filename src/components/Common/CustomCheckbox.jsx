import React from 'react';
import { withStyles, Checkbox } from '@material-ui/core';

const CustomCheckbox = withStyles({
  root: {
    color: '#a5a5a5',
    '&$checked': {
      color: '#90CAF9',
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

export default CustomCheckbox;
