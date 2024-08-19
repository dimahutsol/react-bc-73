import {
	ADD_TODO,
	CHANGE_TODO,
	DELETE_TODO,
	SET_CURRENT_TODO,
} from './constants';

const initialState = {
	items: [],
	currentTodo: null,
};

export const todosReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case ADD_TODO:
			console.log(action.type);
			return {
				...state,
				items: [...state.items, action.payload],
			};
		case DELETE_TODO:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload),
			};
		case SET_CURRENT_TODO:
			return {
				...state,
				currentTodo: action.payload,
			};
		case CHANGE_TODO:
			return {
				...state,
				items: state.items.map(item =>
					item.id === state.currentTodo.id
						? { ...item, text: action.payload }
						: item
				),
				currentTodo: null,
			};
		default:
			return state;
	}
};
