import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ListItemComponent = ({
  title, thumbnail, description, classes,
}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Grid container spacing={16} wrap="nowrap">
        <Grid item>
          <img src={thumbnail} className={classes.thumbnail} alt={title} />
        </Grid>
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
      </Grid>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>{description}</Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

ListItemComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
};

ListItemComponent.defaultProps = {
  description: '',
};

export default withStyles(styles)(ListItemComponent);
