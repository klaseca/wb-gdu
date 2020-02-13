import React from 'react'
import { Button, withStyles } from '@material-ui/core';

const CustomButton = withStyles({
  root: {
    background: ({ bg }) => (bg ? bg : 'rgb(112, 165, 185)'),
    color: 'white',
    padding: '6px 20px',
    transition: 'all .5s ease',
    '&:hover': {
      background: ({ hoverBg }) => hoverBg ? hoverBg : 'rgb(88, 140, 160)',
      transition: 'all .5s ease'
    }
  }
})(({bg, hoverBg, ...props}) => <Button {...props} />);

export default CustomButton;
