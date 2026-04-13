import TodoItem from "./TodoItem.jsx";
import TodoItemEmpty from "./TodoItemEmpty.jsx";
export default function TodoList() {
    return (
        <ul className='todo__list'>
            <TodoItemEmpty />
            <TodoItem />
        </ul>
    )
}