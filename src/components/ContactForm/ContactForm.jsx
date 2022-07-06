import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from './FormContainer.styled';
import { Button } from 'components/Button.styled';

const nameRegexPattern = new RegExp(
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
);
const numberRegexPattern = new RegExp(
  '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}'
);

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(
            nameRegexPattern,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          )
          .required('Required'),
        number: Yup.string()
          .matches(
            numberRegexPattern,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          )
          .required('Required'),
      })}
      onSubmit={(values, action) => {
        addContact(values);

        action.resetForm();
        action.setSubmitting(false);
      }}
    >
      <FormContainer>
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="number">Number</label>
          <Field id="number" name="number" type="tel" />
          <ErrorMessage name="number" component="div" />

          <Button type="submit">Add contact</Button>
        </Form>
      </FormContainer>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
