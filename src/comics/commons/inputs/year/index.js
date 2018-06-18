import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const YearInput = ({ input, classes }) => {
  return (
    <FormControl>
      <Grid container justify="flex-start">
        <InputLabel htmlFor="year">Year</InputLabel>
        <Select {...input} className={classes.select} inputProps={{ id: 'year' }}>
          <MenuItem value={null}>
            <em>Any</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
    </FormControl>
  );
};

YearInput.propTypes = {
  input: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YearInput);
