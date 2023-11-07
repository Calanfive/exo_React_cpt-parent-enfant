import { useCallback, useState } from 'react'
import Counter1 from './Counter1'
import Counter3 from './Counter3'
import Counter4 from './Counter4'
import Counter5 from './Counter5'

function App() {
  const [count, setCount] = useState(0)
  const [countUn, setCountUn] = useState(2)
  const [countDeux, setCountDeux] = useState(42)

  const handleClick = useCallback(
    () => { setCount(count + 1) },
    [count]
  )
  const handleClickAll = useCallback(
    () => { 
      setCountUn(countUn + 1) 
      setCountDeux(countDeux + 1) 
    },
    [countUn, countDeux]
  )

  const handleIncrHaut = useCallback(
    () => { setCountUn(countUn + 1)
    },
    [countUn]
  );

  const handleDecreHaut = useCallback(
    () => { setCountUn(countUn - 1)
    },
    [countUn]
  );
  
  const handleIncrBas = useCallback(
    () => { setCountDeux(countDeux + 1)
    },
    [countDeux]
  );

  const handleDecreBas = useCallback(
    () => { setCountDeux(countDeux - 1)
    },
    [countDeux]
  );

  return (
    <div>
      <h1>exo 1 et 2</h1>
        <Counter1 />
        <Counter1 />

      <h1>exo 3</h1>
        <Counter3 cpt={count} />
        <Counter3 cpt={count} />
        <button className='button' onClick={handleClick}>incrementer les deux</button>

        <h1>exo 4</h1>
        <Counter4 cpt={count} />
        <Counter4 cpt={count} />
        <button className='button' onClick={handleClick}>incrementer les deux</button>

        <h1>exo 5</h1>
        <Counter5 
          cpt={countUn}
          onDecrement={handleDecreHaut}
          onIncrement={handleIncrHaut}
        />
        <Counter5 
          cpt={countDeux}
          onDecrement={handleDecreBas}
          onIncrement={handleIncrBas}
          />
        <button className='button' onClick={handleClickAll}>incrementer les deux</button>

    </div>
  )
}

export default App