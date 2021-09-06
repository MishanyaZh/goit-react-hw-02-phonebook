import PropTypes from 'prop-types';
import { Container } from './Section.styled';

const Section = ({ children }) => <Container>{children}</Container>;

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
