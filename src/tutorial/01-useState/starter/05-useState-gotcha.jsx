import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      // console.log(currentState)
      return newState
    })
  }
  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateGotcha
