import { useCallback, useState } from 'react';

const Counter1 = () => {
    const [counter, setCounter] = useState(0)

    const handleClick1 = useCallback(
        () => { setCounter(counter + 1) },
        [counter]
    )
    const handleClick2 = useCallback(
        () => { setCounter(counter -1) },
        [counter]
    )

    return (
        <div className="cpt">
            <p> {counter}</p>
            <button className='button' onClick={handleClick1}>+</button>
            <button className='button' onClick={handleClick2}>-</button>
        </div>
    );
};

export default Counter1;