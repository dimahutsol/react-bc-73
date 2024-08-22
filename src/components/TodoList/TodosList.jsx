import { useDispatch, useSelector } from "react-redux";
import { selectTodos, selectFilter } from "reduxStore/selectors";
import { setCurrentTodo } from "reduxStore/todosSlice";
import { deleteTodo } from "reduxStore/operation";

export const TodosList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
          <button type="button" onClick={() => dispatch(setCurrentTodo(todo))}>
            Change
          </button>
        </li>
      ))}
    </ul>
  );
};
