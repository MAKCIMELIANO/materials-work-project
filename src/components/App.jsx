import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import MaterialEditorForm from './MaterialEditorForm/MaterialEditorForm';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <MaterialEditorForm />
      </Layout>
    );
  }
}
