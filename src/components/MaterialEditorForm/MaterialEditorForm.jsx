import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function MaterialEditorForm() {
  return (
    <Formik
      initialValues={{ title: '', links: '' }}
      onSubmit={xxx => console.log(xxx)}
    >
      <Form>
        <label>
          Описание
          <Field name="title" type="text" />
        </label>
        <label>
          Ссылка
          <Field name="link" type="url" />
        </label>
        <button type="submit">Добавить материал</button>
      </Form>
    </Formik>
  );
}
