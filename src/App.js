import React, { useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
   
    document.title = 'MY Todo LIst';
  }, []);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">To-Do List</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={addTask}>
                Add Task
              </button>
            </div>
            
          </div>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li className="list-group-item" key={index}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
