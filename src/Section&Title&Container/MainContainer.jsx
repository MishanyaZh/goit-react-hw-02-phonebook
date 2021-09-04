import { MainContainer, Title } from './MainContainer.styled';

const Container = ({ children, title }) => (
  <MainContainer>
    <Title>{title}</Title>
    {children}
  </MainContainer>
);

export default Container;
