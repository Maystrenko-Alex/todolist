
export type TodoListPropsType = {
  title: string
  tasks: TaskType[]
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
 
  return (
    <div className='wrapper'>
      <h3>{props.title}</h3>
      <div>
        <input></input>
        <button>+</button>
      </div>
      <ul>
        <li><input type="checkbox" checked={props.tasks[0].isDone} /><span>{props.tasks[0].title}</span></li>
        <li><input type="checkbox" checked={props.tasks[1].isDone} />{props.tasks[1].title}</li>
        <li><input type="checkbox" checked={props.tasks[2].isDone} />{props.tasks[2].title}</li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}