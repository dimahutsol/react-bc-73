import {
	TodosForm,
	Section,
	Container,
	TodosList,
	SearchBox,
	ChangeTodoForm,
} from 'components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from 'reduxStore/selectors';

const Todos = () => {
	const [filter, setFilter] = useState('');

	const currentTodo = useSelector(selectCurrentTodo);

	const handleSearch = e => {
		setFilter(e.target.value);
	};

	// const filteredTodos = todos.filter(todo =>
	// 	todo.text.toLowerCase().includes(filter.toLowerCase())
	// );

	return (
		<Section>
			<Container>
				{currentTodo ? (
					<ChangeTodoForm text={currentTodo.text} />
				) : (
					<TodosForm />
				)}
				<SearchBox handleSearch={handleSearch} />
				<TodosList />
			</Container>
		</Section>
	);
};

export default Todos;
