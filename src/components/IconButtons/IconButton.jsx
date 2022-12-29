import React from 'react';
import PropTypes from 'prop-types';
import css from './IconButton.module.css';

export const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={css.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

//* Сделал Классом - работает
// export class IconButton extends Component {
//   render() {
//     return (
//       <button
//         type="button"
//         className={css.IconButton}
//         onClick={this.props.onClick}
//         aria-label={this.props.ariaLabel}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
