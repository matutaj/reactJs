import React from "react";

import { FaPlus, FaGithubAlt } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositóeio" />
        <SubmitButton disable>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
