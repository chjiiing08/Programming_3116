import { useState } from 'react';
import './todolist.css'
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './components/TodoList.jsx';

class Todo{
    constructor(text){
        this.id = Date.now();       // 할일 고유 id: 만든 시각, newDate().getItem
        this.text = text;           // 할일 내용
        this.isCompleted = false;   //완료 여부: 기본값 false
    }
}

function TodoListApp(){
    const [todos, setTodos] = useState([]); //할일 목록: 기본값 빈 리스트 
    const addTodo = (text) => setTodos((todos) => [
        // 이전 todos 복사
        ...todos,
        // newTodo 만들자
        // 이전 todos 추가하자
        new Todo(text)
    ]);
    
    return(
        <div className="todo">
            <TodoHeader/>
            <TodoAdder addTodo={addTodo}/>
            <TodoList/>
        </div>
    )
}

export default TodoListApp;