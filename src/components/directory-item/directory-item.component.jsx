import './directory-item.styles';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  NavLink,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <NavLink to={route}>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </NavLink>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
