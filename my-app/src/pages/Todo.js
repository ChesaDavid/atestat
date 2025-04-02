import React, { useState, useRef, useEffect } from "react";
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  onSnapshot 
} from "../firebase";
import { db, auth } from "../firebase";
import { onAuthStateChanged, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const addField = useRef();
  const navigate = useNavigate();

  // Handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchTasks(currentUser.uid);
      } else {
        setUser(null);
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  // Fetch tasks with real-time updates
  const fetchTasks = (userId) => {
    const tasksRef = collection(db, "users", userId, "tasks");
    const unsubscribe = onSnapshot(tasksRef, (querySnapshot) => {
      const tasksList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(tasksList);
    });

    return unsubscribe;
  };

  const addTask = async () => {
    const task = addField.current.value.trim();
    if (task && user) {
      try {
        await addDoc(collection(db, "users", user.uid, "tasks"), {
          text: task,
          createdAt: new Date().toISOString(),
          completed: false
        });
        addField.current.value = "";
      } catch (error) {
        console.error("Error adding task: ", error);
      }
    }
  };

  const deleteTask = async (id) => {
    if (user) {
      try {
        await deleteDoc(doc(db, "users", user.uid, "tasks", id));
      } catch (error) {
        console.error("Error deleting task: ", error);
      }
    }
  };

  const toggleTaskCompletion = async (task) => {
    if (user) {
      try {
        const taskRef = doc(db, "users", user.uid, "tasks", task.id);
        await updateDoc(taskRef, {
          completed: !task.completed
        });
      } catch (error) {
        console.error("Error updating task: ", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center mt-10">Please log in to view your tasks</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white">To-Do App</h1>
        <button
          onClick={handleLogout}
          className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
      
      <div className="flex mb-4">
        <input
          type="text"
          ref={addField}
          onKeyDown={handleKeyPress}
          className="flex-grow border border-gray-600 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <li className="text-gray-400 text-center py-4">No tasks yet. Add one above!</li>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded-lg ${task.completed ? 'bg-gray-700' : 'bg-gray-800'}`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task)}
                  className="mr-3 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className={`${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;