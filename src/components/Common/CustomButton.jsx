import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const CustomButton = withStyles({
  root: {
    background: ({ bg }) => (bg ? bg : '#90CAF9'),
    color: 'rgba(0, 0, 0, 0.89)',
    padding: '6px 20px',
    transition: 'all .5s ease',
    '&:hover': {
      background: ({ hoverBg }) => (hoverBg ? hoverBg : '#64B5F6'),
      transition: 'all .5s ease',
    },
  },
})(({ bg, hoverBg, ...props }) => <Button {...props} />);

export default CustomButton;
