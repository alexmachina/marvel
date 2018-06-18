import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const EntryComponent = ({ keyName, value, classes }) =>
  (value ? (
    <Grid item xs={6}>
      <Typography className={classes.keyName} variant="body1">{keyName}</Typography>
      <Typography variant="subheading" gutterBottom noWrap>{value}</Typography>
    </Grid>
  ) : null);

const Entry = withStyles(styles)(EntryComponent);

const getPriceString = (priceObj) => {
  const priceValue = priceObj && priceObj.get('price', undefined);
  return priceValue ? `$${priceValue}` : undefined;
};

const Info = ({
  comic,
}) => (
  <Grid container spacing={8}>
    <Grid item xs={12}>
      <Typography variant="title" gutterBottom>Info</Typography>
    </Grid>
    <Entry keyName="Series" value={comic.getIn(['series', 'name'])} />
    <Entry keyName="Issue Number" value={comic.get('issueNumber')} />
    <Entry keyName="Price" value={getPriceString(comic.getIn(['prices', 0]))} />
    <Entry keyName="Format" value={comic.get('format')} />
    <Entry keyName="Page Count" value={comic.get('pageCount')} />
    <Entry keyName="ISBN" value={comic.get('isbn')} />
    <Entry keyName="ISSN" value={comic.get('issn')} />
  </Grid>
);

export default Info;
