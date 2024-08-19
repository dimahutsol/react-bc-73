import { nanoid } from 'nanoid';
import {
	ADD_TODO,
	CHANGE_TODO,
	DELETE_TODO,
	SET_CURRENT_TODO,
} from './constants';

export const addTodo = text => {
	return { type: ADD_TODO, payload: { text, id: nanoid() } };
};

export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};

export const setCurrentTodo = todo => {
	return {
		type: SET_CURRENT_TODO,
		payload: todo,
	};
};

export const changeTodo = text => {
	return {
		type: CHANGE_TODO,
		payload: text,
	};
};
