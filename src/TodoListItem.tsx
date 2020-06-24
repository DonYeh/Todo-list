import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Container,
	IconButton,
	Paper,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { Check, Delete } from "@material-ui/icons";
import CssBaseline from "@material-ui/core/CssBaseline";

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
			<CssBaseline />
			<Container maxWidth="sm" style={{ padding: 0 }}>
				<Paper>
					<Card variant="outlined" style={{ marginTop: 35 }}>
						<CardContent>
							<Typography
								variant="h6"
								component="h2"
								style={{
									textDecoration: todo.complete
										? "line-through"
										: "none",
								}}
							>
								<IconButton onClick={() => toggleTodo(todo)}>
									<Check style={{ color: "green" }} />
								</IconButton>
								{todo.text}
								{/* <Typography>{todo.text}</Typography> */}
								<IconButton
									style={{ float: "right" }}
									onClick={() => removeTodo(todo.id)}
								>
									<Delete style={{ color: "red" }} />
								</IconButton>
							</Typography>
						</CardContent>
					</Card>
				</Paper>
			</Container>

			{/* <label
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
			</label> */}
		</div>
	);
};
