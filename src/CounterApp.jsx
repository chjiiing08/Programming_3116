import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0) 
  //상태, 기본값: 0, counter: 이전 또는 현재의 값, setCounter: count 값 변경, 함수
  //count 값을 변경할 때 setCount()를 사용해서 변경해야함!!!! => react가 상태변화를 눈치챔

  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount((count) => count + 1)}>+</button> {/* Too many re-renders */}
    <button onClick={() => setCount((count) => count + 2)}>+2</button> {/* Too many re-renders */}
    <button onClick={() => setCount((count) => count - 1)}>-</button> {/* Too many re-renders */}
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp
