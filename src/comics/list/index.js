import React from 'react';
import InfiniteScroller from 'react-infinite-scroller';
import { List, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import shortid from 'shortid';
import Loader from '../commons/loader';
import styles from './styles';

import ListItem from './item';

const createThumbnailUrl = (thumbnail) => {
  const path = thumbnail.get('path');
  const extension = thumbnail.get('extension');

  return `${path}/portrait_small.${extension}`;
};

const renderListItem = getComicCharacters => (item) => {
  const onComicView = () => (
    item.getIn(['characters', 'returned'], 0) > 0
    && getComicCharacters({ comicId: item.get('id') })
  );

  return (
    <Grid key={item.get('id')} item xs={12} md={6} lg={4}>
      <ListItem
        title={item.get('title')}
        thumbnail={createThumbnailUrl(item.get('thumbnail'))}
        details={item}
        onComicView={onComicView}
      />
    </Grid>
  );
};

const ListComponent = ({ comics, onLoadMore, hasMore, classes, getComicCharacters, }) => (
  <InfiniteScroller
    useWindow
    initialLoad={false}
    hasMore={hasMore}
    loader={<Loader key={shortid.generate()} />}
    loadMore={onLoadMore}
  >
    <Grid className={classes.root} container>
      {comics.get('results', List()).map(renderListItem(getComicCharacters))}
    </Grid>
  </InfiniteScroller>
);

ListComponent.propTypes = {
  comics: ImmutablePropTypes.map,
};

ListComponent.defaultProps = {
  comics: Map({}),
};

export default withStyles(styles)(ListComponent);
