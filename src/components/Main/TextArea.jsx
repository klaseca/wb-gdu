import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const TextArea = withStyles({
  root: {
    '& label': {
      color: '#5f5f5f',
      fontSize: '35px',
    },
    '& label.Mui-focused': {
      color: 'rgb(112, 165, 185)',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: '2px solid rgb(112, 165, 185)',
    },
    '& .MuiFilledInput-root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '45px 12px 10px',
      boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
    },
    '& .MuiFilledInput-input': {
      height: '100% !important',
      color: 'white',
    },
    margin: '10px 0',
    width: '90%',
  },
})(TextField);

export default TextArea;
