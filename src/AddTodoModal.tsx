import React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	TextField,
} from "@material-ui/core";
import { useState, ChangeEvent, FormEvent } from "react";

// interface AddtodoModalProps {}

interface AddTodoModalProps {
	addTodo: AddTodo;
	open: boolean;
	handleClose: () => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({
	addTodo,
	open,
	handleClose,
}) => {
	const [newTodo, setNewTodo] = useState("");
	const [isOpen, setIsOpen] = useState(open);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setNewTodo(e.target.value);
	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo("");
		handleClose();
	};
	const closeModal = () => {
		setNewTodo("");
		handleClose();
	};
	// const handleModalClose = () => {
	// const handleClose = () => {
	// 	handleModalClose();
	// };
	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Add Todo</DialogTitle>
			<DialogContent>
				<TextField
					type="text"
					label="I will do..."
					value={newTodo}
					onChange={handleChange}
					variant="outlined"
					required={true}
				/>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					color="primary"
					type="submit"
					onClick={handleSubmit}
				>
					+ add
				</Button>
				<Button
					variant="contained"
					color="primary"
					type="submit"
					onClick={closeModal}
				>
					x cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddTodoModal;
