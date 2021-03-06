import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import CompletedTasks from './components/CompletedTasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      completed: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      completed: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      completed: false,
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Update the status of the task 
const updateStatus=(id, newStatus) => {
  let allTasks = tasks;
  allTasks = allTasks.map(task => {
      if(task.id === id) {
          console.log('in here')
          task.completed = newStatus;
      }
  return task
  })
  setTasks(allTasks)
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Complete
const toggleCompleted = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleCompleted} updateStatus={updateStatus} /> : 'No ToDos Listed'}
      {tasks.length > 0 ? <CompletedTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleCompleted} updateStatus={updateStatus} /> : 'No Tasks Have Been Completed Yet'}
    </div>
  );
}

export default App;
