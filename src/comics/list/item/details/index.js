/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Info from './info';
import Characters from './characters';

const Detail = ({
  comic,
}) => (
  <ExpansionPanelDetails>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Info comic={comic} />
      </Grid>
      <Grid item>
        {comic.getIn(['characters', 'total'], 0) > 0
            && <Characters characters={comic.get('characters')} />}
      </Grid>
    </Grid>
  </ExpansionPanelDetails>
);

export default Detail;
