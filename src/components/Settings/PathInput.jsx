import { TextField, withStyles } from '@material-ui/core';

const PathInput = withStyles({
  root: {
    '& label': {
      color: '#5f5f5f'
    },
    '& label.Mui-focused': {
      color: 'rgb(112, 165, 185)'
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: '2px solid rgb(112, 165, 185)'
    },
    '& .MuiFilledInput-input': {
      height: '100% !important',
      color: 'rgb(230, 230, 230)'
    },
    margin: '10px 0',
    width: '100%'
  }
})(TextField);

export default PathInput;
