/* eslint-disable no-console, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as comicsActions from './redux/actions';
import selectors from './redux/selectors';
import List from './list';
import Search from './search';

@connect(selectors, dispatch => ({
  getComics: bindActionCreators(comicsActions.getComics, dispatch),
  getComicCharacters: bindActionCreators(comicsActions.getComicCharacters, dispatch),
}))
export default class Comics extends React.Component {
  static propTypes = {
    comics: ImmutablePropTypes.map.isRequired,
    getComics: PropTypes.func.isRequired,
    getComicCharacters: PropTypes.func.isRequired,
  }

  async componentDidMount() {
    const { getComics } = this.props;

    try {
      await getComics({ startYear: 2017 });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { comics, getComics, getComicCharacters } = this.props;

    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Search getComics={getComics} />
          <List comics={comics} getComicCharacters={getComicCharacters} />
        </Grid>
      </Grid>
    );
  }
}

