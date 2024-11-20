import React from 'react'
import { useState } from 'react'

// // const Starter = () => {
// //   const [amount, setAmount] = useState(0)
// //   const addOne = () => {
// //     setAmount(amount + 1)
// //   }
// //   // const minusOne = () => {
// //   //   setAmount(amount - 1)
// //   // }
// //   return (
// //     <div>
// //       <h1>{setAmount}</h1>
// //       <button type="button" onClick={addOne} className="btn">
// //         Add One
// //       </button>
// //       {/* <button type="button" onClick={minusOne} className="btn">
// //         Minus One
// //       </button> */}
// //     </div>
// //   )
// // }

// export default Starter

// const Starter = () => {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count + 1)
//   }

//   const minusOne = () => {
//     setCount(count - 1)
//   }
//   return (
//     <>
//       <h4> You clicked {count} times</h4>
//       <button type="button" className="btn" onClick={handleClick}>
//         Click me
//       </button>
//       <button type="button" className='btn' onClick={minusOne}> Minus One</button>
//     </>
//   )
// }

// export default Starter

const Starter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const minusOne = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h4> First Ticket {count}</h4>

      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
      <button
        type="button"
        className="btn"
        onClick={minusOne}
        disabled={count === 0}
      >
        Minus One
      </button>
      <h4> Second Ticket {count}</h4>
    </>
  )
}

export default Starter
