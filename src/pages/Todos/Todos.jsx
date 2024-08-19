import {
  TodosForm,
  Section,
  Container,
  TodosList,
  SearchBox,
  ChangeTodoForm,
} from "components";
import { useSelector } from "react-redux";
import { selectCurrentTodo } from "reduxStore/selectors";

const Todos = () => {
  const currentTodo = useSelector(selectCurrentTodo);

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
