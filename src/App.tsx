import React, { useState } from "react";
// import { TodoListItem } from "./TodoListItem";
import { TodoList } from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core";

const initialTodos: Array<Todo> = [
	{ id: "1", text: "eat", complete: false },
	{ id: "two", text: "drink", complete: false },
	{ id: "tres", text: "be merry", complete: false },
];

const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo: ToggleTodo = (selectedTodo) => {
		console.log(selectedTodo);
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

	const addTodo: AddTodo = (newTodo) => {
		newTodo.trim() !== "" &&
			setTodos([
				...todos,
				{ id: uuidv4(), text: newTodo, complete: false },
			]);
	};

	// const checkTodo: RemoveTodo = (id) => {
	// 	console.log(id);
	// };

	const removeTodo: RemoveTodo = (id) => {
		const filteredTodos = todos.filter((todo) => todo.id != id);
		setTodos(filteredTodos);
	};

	return (
		<Grid container>
			<AddTodoForm addTodo={addTodo} />
			<TodoList
				todos={todos}
				toggleTodo={toggleTodo}
				removeTodo={removeTodo}
			/>
		</Grid>
	);
};

export default App;
