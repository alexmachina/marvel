import React from 'react';
import { List, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import ListItem from './component/listItem';

const createThumbnailUrl = (thumbnail) => {
  const path = thumbnail.get('path');
  const extension = thumbnail.get('extension');

  return `${path}/portrait_small.${extension}`;
};

const renderListItem = item => (
  <ListItem
    key={item.get('id')}
    title={item.get('title')}
    thumbnail={createThumbnailUrl(item.get('thumbnail'))}
  />
);

const ListComponent = ({ comics }) => (
  <div>
    {comics.get('results', List()).map(renderListItem)}
  </div>
);

ListComponent.propTypes = {
  comics: ImmutablePropTypes.map,
};

ListComponent.defaultProps = {
  comics: Map(),
};
export default ListComponent;
