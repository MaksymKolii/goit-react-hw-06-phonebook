import PropTypes from 'prop-types';
import { SectionClass } from './Section.styled';

export const Section = ({ children }) => {
  return <SectionClass>{children}</SectionClass>;
};
Section.propTypes = {
  children: PropTypes.node,
};
