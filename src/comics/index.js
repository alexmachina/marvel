/* eslint-disable no-console, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import * as comicsActions from './redux/actions';
import selectors from './redux/selectors';
import List from './list';
import Search from './search';
import styles from './styles';
import Loader from './commons/loader';
import { getListFromMapById } from './redux/utils';

@connect(selectors, dispatch => ({
  getComics: bindActionCreators(comicsActions.getComics, dispatch),
  getMoreComics: bindActionCreators(comicsActions.getMoreComics, dispatch),
  getComicCharacters: bindActionCreators(comicsActions.getComicCharacters, dispatch),
}))
@withStyles(styles)
export default class Comics extends React.Component {
  static propTypes = {
    comics: ImmutablePropTypes.map.isRequired,
    getComics: PropTypes.func.isRequired,
    getComicCharacters: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {
    const { getComics } = this.props;

    try {
      getComics({ startYear: 2017 });
    } catch (error) {
      console.error(error);
    }
  }

  onLoadMore(i) {
    const { getMoreComics, comics } = this.props;

    if (Map.isMap(comics)) {
      const params = comics.get('params').merge({
        offset: i * 20,
      });

      getMoreComics(params.toJS());
    }
  }

  render() {
    const { classes, comics, getComics, getComicCharacters } = this.props;
    const transformedComics = comics.update('results', getListFromMapById);
    const hasMore =
      (!Map.isMap(comics) || !comics.has('count')) ||
      (comics.has('count') && comics.get('count') + comics.get('offset') < comics.get('total'));

    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Search getComics={getComics} />
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <List comics={transformedComics} onLoadMore={this.onLoadMore} hasMore={hasMore} getComicCharacters={getComicCharacters} />
        </Grid>
      </Grid>
    );
  }
}

