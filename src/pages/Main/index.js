import React, { Component } from "react";

import { FaPlus, FaGithubAlt, FaSpinner } from "react-icons/fa";

import api from "../../services/api";
import { Container, Form, SubmitButton, List } from "./styles";

export default class Main extends Component {
  state = {
    newRepo: "",
    repositories: [],
    loading: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem("repositories");
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentsDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem("repositories", JSON.stringify(repositories));
    }
  }
  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };
    this.setState({
      repositories: [...repositories, data],
      newRepo: "",
      loading: false,
    });
  };

  render() {
    const { newRepo, loading, repositories } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositóeio"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <a ref="#">Detalhes</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
