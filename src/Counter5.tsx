
const Counter5 = (props: { cpt: number,
    onDecrement: () => void,
    onIncrement: () => void
}) => {

    return (
        <div className="cpt">
            <p>{props.cpt}</p>
            <button className='button' onClick={props.onDecrement}>-</button>
            <button className='button' onClick={props.onIncrement}>+</button>
        </div>
    );
};

export default Counter5;
