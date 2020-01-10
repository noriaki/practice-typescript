import React, { useState, useCallback } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  const handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
export default Counter
