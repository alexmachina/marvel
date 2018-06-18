import React from 'react';
import { List, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
    <ListItem
      key={item.get('id')}
      title={item.get('title')}
      thumbnail={createThumbnailUrl(item.get('thumbnail'))}
      details={item}
      onComicView={onComicView}
    />
  );
};

const ListComponent = ({ comics, getComicCharacters }) => (
  <div>
    {comics.get('results', List()).map(renderListItem(getComicCharacters))}
  </div>
);

ListComponent.propTypes = {
  comics: ImmutablePropTypes.map,
};

ListComponent.defaultProps = {
  comics: Map({}),
};

export default ListComponent;
