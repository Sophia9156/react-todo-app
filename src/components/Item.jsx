

export default function Item({todo}) {
  return(
    <li>
      <span className="material-icons-outlined">
        label_important
      </span>
      <p className="title">{todo.title}</p>
      <p className="status">{todo.status}</p>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <span className="material-icons-outlined">
          task_alt
        </span>
      </label>
      <span className="material-icons-outlined delete">
        delete
      </span>
    </li>
  )
}