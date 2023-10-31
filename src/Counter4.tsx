import { useCallback, useState, useMemo } from 'react';

const Counter4 = (props: { cpt: number }) => {
    const [counter, setCounter] = useState(0)

    const inc = useMemo(
        () => {
            return props.cpt + counter
        },
        [counter,  props.cpt]
    )
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
            <p>{inc}</p>
            <button className='button' onClick={handleClick1}>+</button>
            <button className='button' onClick={handleClick2}>-</button>
        </div>
    );
};

export default Counter4;