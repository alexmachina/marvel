import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Details from './details';
import selectors from './selectors';
import styles from './styles';
import { LOADED, LOADING } from '../../redux/constants/statusTypes';

@connect(selectors)
@withStyles(styles)
export default class ListItem extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    details: ImmutablePropTypes.map.isRequired,
    characters: ImmutablePropTypes.map.isRequired,
    charactersLoadStatus: PropTypes.string,
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
      onComicView();
    }
  }

  render() {
    const { title, characters, thumbnail, details, classes, charactersLoadStatus } = this.props;
    const isLoaded = charactersLoadStatus === LOADED;
    console.log(charactersLoadStatus);

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
          isLoaded={isLoaded}
          characters={characters}
          comic={details}
        />}
      </ExpansionPanel>
    );
  }
}

