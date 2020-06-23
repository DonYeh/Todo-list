import React, { useState } from "react";
// import { TodoListItem } from "./TodoListItem";
import { TodoList } from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";

const initialTodos: Array<Todo> = [
	{ id: "1", text: "eat", complete: false },
	{ id: "one", text: "sleep", complete: true },
];

const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addTodo: AddTodo = (newTodo: string) => {
		newTodo.trim() !== "" &&
			setTodos([
				...todos,
				{ id: uuidv4(), text: newTodo, complete: false },
			]);
	};

	const removeTodo: RemoveTodo = (id) => {
		const filteredTodos = todos.filter((todo) => todo.id != id);
		setTodos(filteredTodos);
	};

	return (
		<>
			<AddTodoForm addTodo={addTodo} />
			<TodoList
				todos={todos}
				toggleTodo={toggleTodo}
				removeTodo={removeTodo}
			/>
		</>
	);
};

export default App;
