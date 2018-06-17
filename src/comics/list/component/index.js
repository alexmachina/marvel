import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import ListItem from './listItem';

const createThumbnailUrl = (thumbnail) => {
  const path = thumbnail.get('path');
  const extension = thumbnail.get('extension');

  return `${path}/portrait_small.${extension}`;
};

const renderListItem = item => (
  <ListItem
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
  comics: ImmutablePropTypes.map.isRequired,
};

export default ListComponent;
