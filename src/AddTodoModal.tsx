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
			<Grid container direction="column" justify="center">
				<Grid>
					<DialogTitle style={{ textAlign: "center" }}>
						Add Todo
					</DialogTitle>
				</Grid>
				<Grid>
					<DialogContent>
						<TextField
							type="text"
							label="I will do..."
							value={newTodo}
							onChange={handleChange}
							variant="outlined"
							required={true}
							autoFocus
						/>
					</DialogContent>
				</Grid>
				<Grid
					container
					justify="space-between"
					style={{ padding: "1rem 0" }}
				>
					<DialogActions style={{ width: "100%" }}>
						<Grid container justify="space-evenly">
							<Grid item>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									onClick={closeModal}
								>
									x
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									onClick={handleSubmit}
								>
									+
								</Button>
							</Grid>
						</Grid>
					</DialogActions>
				</Grid>
			</Grid>
		</Dialog>
	);
};

export default AddTodoModal;
