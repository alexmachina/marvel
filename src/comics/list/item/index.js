import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Details from './details';
import styles from './styles';

@withStyles(styles)
export default class ListItem extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    details: ImmutablePropTypes.map.isRequired,
  }

  constructor(props) {
    super(props);

    this.onExpansionPanelChange = this.onExpansionPanelChange.bind(this);
    this.state = {
      opened: false,
    };
  }

  onExpansionPanelChange(e, visible) {
    const { onComicView } = this.props;
    const { opened } = this.state;

    if (visible && !opened) {
      this.setState({ opened: true });
      onComicView();
    }
  }

  render() {
    const { title, thumbnail, details, classes, onComicView } = this.props;
    return (
      <ExpansionPanel onChange={this.onExpansionPanelChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container spacing={16} wrap="nowrap">
            <Grid item>
              <img src={thumbnail} className={classes.thumbnail} alt={title} />
            </Grid>
            <Grid item>
              <Typography variant="body2">{title}</Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        {details && <Details
          comic={details}
        />}
      </ExpansionPanel>
    );
  }
}

