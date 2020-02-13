import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const TextArea = withStyles({
  root: {
    '& label': {
      color: '#5f5f5f',
      fontSize: '35px'
    },
    '& label.Mui-focused': {
      color: 'rgb(112, 165, 185)'
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: '2px solid rgb(112, 165, 185)'
    },
    '& .MuiFilledInput-root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '45px 12px 10px'
    },
    '& .MuiFilledInput-input': {
      height: '100% !important',
      color: 'white'
    },
    margin: '10px 0',
    width: '90%'
  }
})(TextField);

export default TextArea;
