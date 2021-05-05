import Task from './Task';

const Tasks = ({tasks, setTasks, updateStatus, onDelete, onToggle}) => {
  return (
    <div className='pendingTasks'>
      { tasks && tasks.map(task => {
          if(task && task.completed === false)
            return ( <><Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /></> )
          })
      }
    </div>
  )
}

export default Tasks
