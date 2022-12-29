import { IconButton } from 'components/IconButtons/IconButton';
import PropTypes from 'prop-types';
import { Span, List, P } from './ContactItem.styled';
import { ReactComponent as DeleteIcon } from '../../Icons/delete2.svg';

export const ContactItem = ({ id, name, number, onClickDelete }) => {
  return (
    <List key={id}>
      <P>
        Name:<Span>{name}</Span>
      </P>
      <P>
        Number:<Span>{number}</Span>
      </P>

      <IconButton onClick={onClickDelete} aria-label="Удалить контакт">
        <DeleteIcon width={20} height={20}></DeleteIcon>
      </IconButton>
    </List>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
  onClickDelete: PropTypes.func.isRequired,
};
