import {
  TodosForm,
  Section,
  Container,
  TodosList,
  SearchBox,
  ChangeTodoForm,
} from "components";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

const Todos = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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

  const handleEditToDo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };
  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };
  const handleUpdateTodo = (text) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === currentTodo.id ? { ...item, text } : item
      )
    );
    cancelUpdate();
  };

  return (
    <Section>
      <Container>
        {isEditing ? (
          <ChangeTodoForm
            onSubmit={handleUpdateTodo}
            text={currentTodo.text}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <TodosForm onSubmit={onSubmit} />
        )}
        <SearchBox handleSearch={handleSearch} />
        <TodosList
          todos={filteredTodos}
          handleDelete={handleDelete}
          handleEditToDo={handleEditToDo}
        />
      </Container>
    </Section>
  );
};

export default Todos;
