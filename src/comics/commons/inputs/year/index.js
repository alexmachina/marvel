/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  let startYear = 1900;

  while (startYear <= currentYear) {
    years.push(startYear++);
  }

  return years.reverse();
};

const years = getYears();

const YearInput = ({ input, classes }) => {
  return (
    <FormControl>
      <Grid container justify="flex-start">
        <InputLabel htmlFor="year">Year</InputLabel>
        <Select {...input} className={classes.select} inputProps={{ id: 'year' }}>
          <MenuItem key='null-year' value={null}>
            <em>Any</em>
          </MenuItem>
          {years.map(year =>
            <MenuItem key={year} value={year}>{year}</MenuItem>)}
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
