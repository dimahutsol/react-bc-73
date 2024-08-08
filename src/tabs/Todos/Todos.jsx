import { TodosForm, Section, Container, TodosList } from "components";
import { nanoid } from "nanoid";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = (text) => {
    const todo = {
      id: nanoid(),
      text,
    };

    setTodos((prev) => [...prev, todo]);
  };

  console.log(todos);
  return (
    <Section>
      <Container>
        <TodosForm onSubmit={onSubmit} />
        <TodosList todos={todos} />
      </Container>
    </Section>
  );
};

export default Todos;
