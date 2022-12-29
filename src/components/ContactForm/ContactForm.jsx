// import { useState } from 'react';
// import { FormSt, Label, Input, Button } from './ContactForm.styled';
// import { Formik, ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.string().required(),
// });

// export function ContactForm({ addUser }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contactFormObj = { name, number };

//   const handleChange = ev => {
//     const { name, value } = ev.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   // const handleSubmit = evt => {
//   //   evt.preventDefault();
//   //   console.log(evt.target.elements.name.value);
//   //   console.log(evt.target.elements.number.value);
//   //   addUser(contactFormObj);
//   //   //* addUser(name, number);
//   //   reset();
//   // };

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);

//     addUser(contactFormObj);
//     //* addUser(name, number);
//     // reset();
//     resetForm();
//   };
//   const initialValues = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       // validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <FormSt>
//         <Label>
//           Name
//           <Input
//             id="name"
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             // onChange={handleChange}
//             // value={name}
//             placeholder="Enter name"
//           />
//           {/* <ErrorMessage name="name" component="div" /> */}
//         </Label>
//         <Label>
//           Number
//           <Input
//             id="number"
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             // onChange={handleChange}
//             // value={number}
//             // onChange={formik.handleChange}
//             // value={formik.values.firstName}
//             placeholder="Enter number"
//           />
//           {/* <ErrorMessage name="number" component="div" /> */}
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </FormSt>
//     </Formik>
//   );
// }

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   onSubmit: PropTypes.func,
// };

import React from 'react';
import { useFormik } from 'formik';

export const ContactForm = ({ addUser }) => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      addUser(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="lastName">Number</label>
      <input
        id="number"
        name="number"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.number}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
