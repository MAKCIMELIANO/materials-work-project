import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import MaterialEditorForm from './MaterialEditorForm/MaterialEditorForm';
import * as API from '../services/api';
import Materials from './Materials/Materials';

export default class App extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials });
    } catch (error) {
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    await API.deleteMaterial(id);
    this.setState(state => ({
      materials: state.materials.filter(material => material.id !== id),
    }));
  };

  render() {
    const { materials } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <MaterialEditorForm onSubmit={this.addMaterial} />
        <Materials items={materials} onDelete={this.deleteMaterial} />
      </Layout>
    );
  }
}
