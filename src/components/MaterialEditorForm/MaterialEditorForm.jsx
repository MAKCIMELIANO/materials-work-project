import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function MaterialEditorForm({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values).then(() => actions.setSubmitting(false));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="title" type="text" />
          </label>
          <label>
            Ссылка
            <Field name="link" type="text" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
}
