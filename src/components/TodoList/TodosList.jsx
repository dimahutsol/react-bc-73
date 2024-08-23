import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTodo } from 'reduxStore/todosSlice';
import { deleteTodo } from 'reduxStore/operation';
import { selectFilterdTodosMemo } from 'reduxStore/selectors';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import s from './TodosList.module.css';

export const TodosList = () => {
  const todos = useSelector(selectFilterdTodosMemo);

  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {todos.map((todo, idx) => (
        <li className={s.item} key={todo.id}>
          <div className={s.box}>
            <p className={s.subText}>TODO #{idx + 1}</p>
            <p className={s.text}>{todo.text}</p>
            <button
              className={s.deleteButton}
              type="button"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <RiDeleteBinLine />
            </button>
            <button
              className={s.editButton}
              type="button"
              onClick={() => dispatch(setCurrentTodo(todo))}
            >
              <RiEdit2Line />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
