import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
	/* return [{
    id: new Date().getTime(),
    desc:'Aprender React',
    done:false
  }] */

	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (todoId) => {
		//const deleteTodo = JSON.parse(localStorage.getItem('todos')).find(element => element.id === todoId );

		const action = {
			type: "delete",
			payload: todoId,
		};
		dispatch(action);
	};

	const handleToggle = (todoId) => {
		dispatch({
			type: "toogle",
			payload: todoId,
		});
	};
	const handleAddTodo = (newTodo) => {
		const action = {
			type: "add",
			payload: newTodo,
		};
		dispatch(action);
	};
	return (
		<div>
			<h1>TodoApp ({todos.length})</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					{/* TodoLista, todos, handleDelete, handlettoogle*/}
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				<div className="col-5">
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</div>
	);
};
