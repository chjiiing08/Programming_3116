import { useState } from "react"
import CounterApp from "./CounterApp"
import TodoListApp from "./TodoListApp"

function ButtonPageApp({ setPage }) {
    return (
        <>
            <h1>App 목록</h1>
            <ul>
                <li>
                    <button 
                    onClick={() => setPage('counterapp')}
                    style={{width: "200px", height: "200px", fontSize: "1.5rem"}}
                    >CounterApp</button></li>
                <li>
                    <button 
                    onClick={() => setPage('todolistapp')}
                    style={{width: "200px", height: "200px", fontSize: "1.5rem"}}
                    >TodoListApp</button></li>
            </ul>
        </>
    )
}

export default function HomeApp() {
    //page가 home, counterapp, todolistapp에 따라 적절힌 컴포넌트 표시하자
    const [page, setPage] = useState('home')
    return (
        <>
            {/* page가 home이면, <ButtnPageApp /> */}
            {page === 'home' && <ButtonPageApp setPage={setPage} />}

            {/* page가 counterapp, <CounterApp /> */}
            {page === 'counterapp' && <CounterApp />}

            {/* page가 todolistapp, <TodoListApp /> */}
            {page === 'todolistapp' && <TodoListApp />}

            {page !== 'home' && 
            <button
                onClick={() => setPage('home')}
                style={{
                    position: 'fixed',
                    left: '10px',
                    bottom: '10px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    backgroundColor: '#eee',
                    border: 'none',
                    padding: '6px',
                    }}
                >
                🏠
                </button>}
        </>
    )
}