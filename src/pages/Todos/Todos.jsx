import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  TodosForm,
  Section,
  Container,
  TodosList,
  SearchBox,
  ChangeTodoForm,
  Loader,
  Heading,
} from "components";
import { fetchTodos } from "reduxStore/todos/operation";
import {
  selectCurrentTodo,
  selectIsLoading,
  selectIsError,
} from "reduxStore/todos/selectors";

const Todos = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {currentTodo ? <ChangeTodoForm {...currentTodo} /> : <TodosForm />}
        <SearchBox />
        <TodosList />
        {isLoading && <Loader />}
        {isError && (
          <Heading title={"Something went wrong, try again later!"} top />
        )}
      </Container>
    </Section>
  );
};

export default Todos;
