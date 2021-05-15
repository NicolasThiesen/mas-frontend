import {useState} from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    const contador = () => {
        setCounter(counter+1);
    }
    return (
        <div>
            <button onClick={() => contador()}>Contador: {counter}</button>
        </div>
    )
}
