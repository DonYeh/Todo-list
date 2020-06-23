import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Container } from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";

interface TodoListProps {
	todos: Array<Todo>;
	toggleTodo: ToggleTodo;
	removeTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
	todos,
	toggleTodo,
	removeTodo,
}) => {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="sm">
				<ul style={{ padding: 0 }}>
					{todos.map((todo) => {
						return (
							<TodoListItem
								todo={todo}
								key={todo.id}
								toggleTodo={toggleTodo}
								removeTodo={removeTodo}
							/>
						);
					})}
				</ul>
			</Container>
		</>
	);
};
