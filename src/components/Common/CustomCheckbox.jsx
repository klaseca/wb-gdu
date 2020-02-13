import React from 'react'
import { withStyles, Checkbox } from '@material-ui/core';

const CustomCheckbox = withStyles({
  root: {
    color: '#a5a5a5',
    '&$checked': {
      color: 'rgb(112, 165, 185)'
    }
  },
  checked: {}
})(props => <Checkbox color='default' {...props} />);

export default CustomCheckbox;
