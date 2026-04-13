import './todolist.css'
import Button from './components/Button.jsx';
import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import TodoHeader from './components/TodoHeader.jsx';
import CheckBox from './components/CheckBox.jsx';

function TodoListApp(){
    return(
        <div className="todo">
            <TodoHeader/>
            <form className='todo__form'>
                <input type="text"placeholder="할 일을 입력하세요" className='todo__input'/>
                <Button type='submit' className='todo__button todo__button--add'>Add</Button>
            </form>
            <ul className='todo__list'>
                <TodoItemEmpty/>
                <li className='todo__item todo__item--complete'>
                   <CheckBox id="1">할 일1</CheckBox>
                    <Button className='todo__button todo__button--edit'>✏️</Button>
                    <Button className='todo__button todo__button--delete'>❌</Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;