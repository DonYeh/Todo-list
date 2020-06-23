import React, { ChangeEvent, FormEvent } from "react";
import { FormControl, Container, TextField, Button } from "@material-ui/core";
import { useState } from "react";

interface AddTodoFormProps {
	addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState("");
	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setNewTodo(e.target.value);
	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo("");
	};

	return (
		<Container maxWidth="sm" style={{ marginTop: "5vh" }}>
			<form>
				<FormControl fullWidth={true} focused={true}>
					<TextField
						type="text"
						value={newTodo}
						onChange={handleChange}
						label="I will ..."
						required={true}
					/>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						onClick={handleSubmit}
					>
						{" "}
						+ add{" "}
					</Button>
				</FormControl>
			</form>
		</Container>
	);
};

export default AddTodoForm;
