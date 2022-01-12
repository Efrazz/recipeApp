/** @format */
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
/* import Task from "./components/Task"; */

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:40pm",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting school",
			day: "jan 5th at 2:40pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Food Shopping",
			day: "Feb 5th at 2:30pm",
			reminder: false,
		},
	]);

	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	return (
		<div className='App'>
			<Header />
			{tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "No Tsks"}
			{/* 	<Task /> */}
		</div>
	);
}

export default App;
