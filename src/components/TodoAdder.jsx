import { useState } from 'react';
import Button from './Button.jsx';

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault(); //submit의 기본 동작 막자
        //빈칸이면 바로 return
        if (!inputTodo) return;

        //inputTodo에서 사용자가 입력한 text 가져오자
        //addTodo에 그 text 넣자
        addTodo(inputTodo.trim());
        setInputTodo('');   //input 빈칸 만들자

    }
    return(
        <form className='todo__form' onSubmit={handleSubmit}>
            <input type="text" placeholder="할 일을 입력하세요" className='todo__input' value={inputTodo} onChange={(event) => setInputTodo(event.target.value)} />
            <Button type='submit' className='todo__button todo__button--add'>Add</Button>
        </form>
    )
}