import { IconButton } from 'components/IconButtons/IconButton';
import PropTypes from 'prop-types';
import { Span, P } from './ContactItem.styled';
import { ReactComponent as DeleteIcon } from '../../Icons/delete2.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
    Notify.success(`Contact successfully removed`);
  };

  return (
    <>
      <P>
        Name:<Span>{name}</Span>
      </P>
      <P>
        Number:<Span>{number}</Span>
      </P>

      <IconButton
        // onClick={() => dispatch(deleteContact(id))}
        onClick={onDeleteContact}
        aria-label="Удалить контакт"
      >
        <DeleteIcon width={20} height={20}></DeleteIcon>
      </IconButton>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};
