import Task from './Task';

const CompletedTasks = ({tasks, setTasks, updateStatus, onDelete, onToggle}) => {
  return (
    <div className='tasksCompleted'>
      <h2>Completed Tasks</h2>
      { tasks && tasks.map(task => {
          if(task && task.completed === true)
            return ( <><Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /></> )
          })
      }
    </div>
  )
}

export default CompletedTasks
