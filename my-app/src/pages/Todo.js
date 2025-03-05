import React, { useState, useRef, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "../firebase";
import { db ,auth} from "../firebase";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const addField = useRef();
  const userId = auth.currentUser.uid;
  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "users", userId, "tasks"));
    const tasksList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(tasksList);
  };
  
  const addTask = async () => {
    const task = addField.current.value.trim();
    if (task) {
      const docRef = await addDoc(collection(db, "users", userId, "tasks"), { text: task });
      setTasks([...tasks, { id: docRef.id, text: task }]);
      addField.current.value = "";
    }
  };
  
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "users", userId, "tasks", id));
    setTasks(tasks.filter(task => task.id !== id));
  };
  

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do App with Firebase</h1>
      <div className="flex mb-4">
        <input
          type="text"
          ref={addField}
          onKeyDown={handleKeyPress}
          className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 mb-2 p-2 rounded-lg"
          >
            {task.text}
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
