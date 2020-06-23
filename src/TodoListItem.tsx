import React from "react";
import { v4 as uuidv4 } from "uuid";

interface TodoListItemProps {
	todo: Todo;
	toggleTodo: ToggleTodo;
	removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
	todo,
	toggleTodo,
	removeTodo,
}) => {
	return (
		<div>
			<label
				style={{
					textDecoration: todo.complete ? "line-through" : "none",
				}}
			>
				<input
					type="checkbox"
					checked={todo.complete}
					onChange={() => toggleTodo(todo)}
				/>
				{todo.text}
				<button onClick={() => removeTodo(todo.id)}>
					{" "}
					delete todo
				</button>
			</label>
		</div>
	);
};
