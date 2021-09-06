import PropTypes from 'prop-types';

import { MainContainer, Title, BoxMainContainer } from './MainContainer.styled';

const MContainer = ({ children, title }) => (
  <BoxMainContainer>
    <MainContainer>
      <Title>{title}</Title>
      {children}
    </MainContainer>
  </BoxMainContainer>
);

export default MContainer;

MContainer.propTypes = {
  title: PropTypes.string,
};
