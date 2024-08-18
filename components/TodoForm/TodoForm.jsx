import "./TodoForm.scss"

const TodoForm = () => {
    return (
        <form className="todo__form">
            <input type="text" placeholder="new todo" />
            <button>Add</button>
    </form>
    )
}

export default TodoForm