import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  firstname: '',
  lastname: '',
  language: 'english',
  country: 'germany',
  passportNumber: '',
  passportIssueDay: '',
  passportIssueMonth: '',
  passportIssueYear: '',
  passportExpirationDay: '',
  passportExpirationMonth: '',
  passportExpirationYear: '',
  newsletter: false,
};

const validate = (values) => {
  const errors = {};

  if (values.language === 'javascript') {
    errors.language = 'JavaScript is not a language';
  }

  return errors;
};

const Label = ({ children }) => (
  <label style={{ display: 'block', marginBottom: '0.5rem' }}>{children}</label>
);

const Fieldset = ({ children }) => (
  <fieldset
    style={{ border: 0, padding: 0, margin: 0, marginBottom: '0.5rem' }}
  >
    {children}
  </fieldset>
);

const MonthField = (props) => (
  <Field as="select" {...props} aria-label="Month">
    <option value="1">Jan</option>
    <option value="2">Feb</option>
    <option value="3">Mar</option>
    <option value="4">Apr</option>
    <option value="5">May</option>
    <option value="6">Jun</option>
    <option value="7">Jul</option>
    <option value="8">Aug</option>
    <option value="9">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
  </Field>
);

export function SignUpForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
        <h3>Signup</h3>
        <Label>
          First name
          <Field type="text" name="firstname" />
        </Label>
        <Label>
          Last name
          <Field type="text" name="lastname" />
        </Label>
        <Label>
          Country
          <Field name="country" as="select">
            <option value="germany">Germany</option>
            <option value="russia">Russia</option>
            <option value="us">United States</option>
          </Field>
        </Label>
        <Label>
          Passport number
          <Field type="text" name="passportNumber" />
        </Label>
        <Fieldset>
          <legend>Passport issue date</legend>
          <Field
            type="number"
            name="passportIssueDay"
            aria-label="Day"
            placeholder="Day"
          />
          <MonthField name="passportIssueMonth" />
          <Field
            type="number"
            name="passportIssueYear"
            aria-label="Year"
            placeholder="Year"
          />
        </Fieldset>
        <Fieldset>
          <legend>Passport expiration date</legend>
          <Field
            type="number"
            name="passportExpirationDay"
            aria-label="Day"
            placeholder="Day"
          />
          <MonthField name="passportExpirationMonth" />
          <Field
            type="number"
            name="passportExpirationYear"
            aria-label="Year"
            placeholder="Year"
          />
        </Fieldset>
        <Fieldset>
          <legend>Lanuguage</legend>
          <label>
            <Field type="radio" name="language" value="english" />
            English
          </label>
          <label>
            <Field type="radio" name="language" value="javascript" />
            JavaScript
          </label>
          <ErrorMessage component="p" name="language" />
        </Fieldset>
        <Label>
          <Field type="checkbox" name="newsletter" />
          Subscribe to our newsletter
        </Label>
        <p>
          By signing in you are agreeing to{' '}
          <a href="/toc" target="_blank" rel="noopener noreferrer">
            our terms and conditions
          </a>
          .
        </p>
        <button type="submit">Sign in</button>
      </Form>
    </Formik>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
