import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onAddContact }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(9, 'Please try again (example: 111-22-33)')
      .max(9, 'Please try again (example: 111-22-33)')
      .required('Required'),
  });
  const nameFieldID = useId();
  const numberFieldID = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: '',
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldID}>
          Name
          <Field
            className={css.inputFields}
            id={nameFieldID}
            type="text"
            name="name"
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

        <label htmlFor={numberFieldID}>
          Number
          <Field
            className={css.inputFields}
            id={numberFieldID}
            type="tel"
            name="number"
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
