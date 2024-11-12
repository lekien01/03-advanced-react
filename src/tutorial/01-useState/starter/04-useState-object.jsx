import { useState } from 'react'

const UseStateObject = () => {
  const [oldPerson, newPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'reading books',
  })

  const displayNewPerson = () => {
    newPerson({ name: 'kien', age: 30, hobby: 'palygame' })
  }

  return (
    <div>
      <h2>{oldPerson.name}</h2>
      <h2>{oldPerson.age}</h2>
      <h2>{oldPerson.hobby}</h2>
      <button type="button" onClick={displayNewPerson} className="btn">
        Change Person
      </button>
    </div>
  )
}

export default UseStateObject
