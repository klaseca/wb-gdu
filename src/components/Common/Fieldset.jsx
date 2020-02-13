import { withStyles, FormControl } from '@material-ui/core';

const Fieldset = withStyles({
  root: {
    width: '90%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'threedface',
    borderImage: 'initial',
    marginInlineStart: '2px',
    marginInlineEnd: '2px',
    paddingBlockStart: '0.35em',
    paddingInlineStart: '0.75em',
    paddingInlineEnd: '0.75em',
    paddingBlockEnd: '0.625em',
    minInlineSize: 'min-content'
  }
})(FormControl);

export default Fieldset;
