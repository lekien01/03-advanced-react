import { data } from '../../../data'
import React, { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    console.log(id)
    // get everything but not the item match this ID
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  const clearItems = () => {
    setPeople([])
  }
  return (
    <div>
      {people.map((person) => {
        console.log(person)
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button type="button" className="btn" onClick={clearItems}>
        Clear Items
      </button>
      <h2>useState array example</h2>
    </div>
  )
}

export default UseStateArray
