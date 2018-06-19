import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const SearchInput = ({ input, classes, label }) => {
  return (
    <Grid container className={classes.container}>
      <TextField className={classes.input} label={label} {...input} />
    </Grid>
  );
};

SearchInput.propTypes = {
  input: propTypes.object.isRequired,
};
export default withStyles(styles)(SearchInput);
