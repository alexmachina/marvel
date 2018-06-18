/* eslint-disable react/prop-types */
import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import SearchInput from '../commons/inputs/search';
import YearInput from '../commons/inputs/year';
import styles from './styles';

const SearchForm = ({ handleSubmit, classes, getComics }) => {
  const onSubmit = values => getComics({
    titleStartsWith: values.get('title'),
  });

  return (
    <Paper className={classes.root} elevation="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justify="start" spacing={8}>
          <Grid className={classes.title} container>
            <Field
              component={SearchInput}
              name="title"
            />
          </Grid>
          <Grid className={classes.year} container>
            <Field
              component={YearInput}
              name="year"
            />
          </Grid>
          <Grid className={classes.button} container>
            <Button variant="contained" color="secondary" type="submit">
              <SearchIcon className={classes.icon} />
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

const StyledSearchForm = withStyles(styles)(SearchForm);

export default reduxForm({ form: 'search' })(StyledSearchForm);

