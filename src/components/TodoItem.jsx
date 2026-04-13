import CheckBox from './CheckBox.jsx';
import Button from './Button.jsx';
export default function TodoItem() {
    return (
        <li className='todo__item todo__item--complete'>
            <CheckBox id="1">할 일1</CheckBox>
            <Button className='todo__button todo__button--edit'>✏️</Button>
            <Button className='todo__button todo__button--delete'>❌</Button>
        </li>
    )
}