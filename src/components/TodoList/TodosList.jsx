import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from 'reduxStore/selectors';
import { deleteTodo, setCurrentTodo } from '../../reduxStore/actions';

export const TodosList = ({ handleDelete, handleEditToDo }) => {
	const todos = useSelector(selectTodos);
	const dispatch = useDispatch();

	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>
					{todo.text}
					<button type='button' onClick={() => dispatch(deleteTodo(todo.id))}>
						Delete
					</button>
					<button type='button' onClick={() => dispatch(setCurrentTodo(todo))}>
						Change
					</button>
				</li>
			))}
		</ul>
	);
};
