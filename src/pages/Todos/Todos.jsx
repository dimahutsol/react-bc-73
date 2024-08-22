import {
  TodosForm,
  Section,
  Container,
  TodosList,
  SearchBox,
  ChangeTodoForm,
} from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentTodo } from "reduxStore/selectors";
import { fetchTodos } from "reduxStore/operation";

const Todos = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {currentTodo ? (
          <ChangeTodoForm text={currentTodo.text} />
        ) : (
          <TodosForm />
        )}
        <SearchBox />
        <TodosList />
      </Container>
    </Section>
  );
};

export default Todos;
