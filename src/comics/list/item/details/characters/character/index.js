import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

// TODO: Create module for dealing with API images
const createThumbnailUrl = (thumbnail) => {
  const path = thumbnail.get('path');
  const extension = thumbnail.get('extension');
  return `${path}/standard_small.${extension}`;
};

const Character = ({ name, thumbnail, classes }) => {
  return (
    <Grid container>
      <Avatar src={createThumbnailUrl(thumbnail)} />
      <Typography className={classes.name} variant="body2">{name}</Typography>
    </Grid>
  );
};

export default withStyles(styles)(Character);
