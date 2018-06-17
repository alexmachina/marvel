/* eslint-disable no-console, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as comicsActions from './actions';
import selectors from './selectors';
import List from './list';
import Search from './search';

@connect(selectors, dispatch => ({
  getComics: bindActionCreators(comicsActions.getComics, dispatch),
  updateAppState: bindActionCreators(comicsActions.updateAppState, dispatch),
}))
export default class Comics extends React.Component {
  static propTypes = {
    comics: ImmutablePropTypes.map.isRequired,
    getComics: PropTypes.func.isRequired,
    searchValue: PropTypes.string,
    updateAppState: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  async componentDidMount() {
    const { getComics } = this.props;

    try {
      await getComics({ a: 1 });
    } catch (error) {
      console.error(error);
    }
  }

  onSearchChange(nextSearch) {
    const { updateAppState, getComics } = this.props;
    updateAppState({ searchValue: nextSearch });
    // getComics({ titleStartsWith: nextSearch });
  }

  render() {
    const { comics, searchValue } = this.props;
    console.log(searchValue);
    return (
      <div>
        <Search onChange={this.onSearchChange} value={searchValue} />
        <List comics={comics} />
      </div>
    );
  }
}

