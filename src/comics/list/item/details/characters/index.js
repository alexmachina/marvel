import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Character from './character';

const Characters = ({ characters, classes }) => (
  <Grid container spacing={16}>
    <Grid item xs={12}>
      <Typography variant="title">
        Characters
      </Typography>
    </Grid>
    <Grid item>
      <Grid container spacing={16}>
        {characters.get('results').toList().map(character => (
          <Grid className={classes.characterItem} item xs={12} sm={6}>
            <Character name={character.get('name')} thumbnail={character.get('thumbnail')} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Characters);
