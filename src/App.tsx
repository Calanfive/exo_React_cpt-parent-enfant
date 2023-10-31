import { useCallback, useState } from 'react'
import Counter1 from './Counter1'
import Counter3 from './Counter3'
import Counter4 from './Counter4'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(
    () => { setCount(count + 1) },
    [count]
  )

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
    </div>
  )
}

export default App