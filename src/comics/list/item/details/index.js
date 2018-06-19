/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
import Info from './info';
import Characters from './characters';

const Detail = ({
  comic,
  characters,
  isLoaded,
}) => (
  <ExpansionPanelDetails>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Info comic={comic} />
      </Grid>
      <Grid item xs={12} lg={8}>
        {characters && isLoaded &&
          <Characters characters={characters} />
        }
        {!isLoaded && characters &&
          <CircularProgress color="secondary" />
        }
      </Grid>
    </Grid>
  </ExpansionPanelDetails>
);

export default Detail;

