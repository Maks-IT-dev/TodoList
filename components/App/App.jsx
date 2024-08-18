import "./App.scss"
import TodoForm from "../TodoForm/TodoForm"

const App = () => {
    return (
    <main id="home">
        <div className="todo">
            <h1>TodoList</h1>
            <TodoForm />
            </div>
        </main>
    ) 
}

export default App