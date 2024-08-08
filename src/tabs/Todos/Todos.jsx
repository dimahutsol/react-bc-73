import {
  TodosForm,
  Section,
  Container,
  TodosList,
  SearchBox,
} from "components";
import { nanoid } from "nanoid";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  const onSubmit = (text) => {
    const todo = {
      id: nanoid(),
      text,
    };

    setTodos((prev) => [...prev, todo]);
  };

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <Section>
      <Container>
        <TodosForm onSubmit={onSubmit} />
        <SearchBox handleSearch={handleSearch} />
        <TodosList todos={filteredTodos} handleDelete={handleDelete} />
      </Container>
    </Section>
  );
};

export default Todos;
