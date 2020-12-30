import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  BackgroundImage,
  MenuItemContainer,
  Content,
  Title,
  Subtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl} className="background-image" />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default MenuItem;
