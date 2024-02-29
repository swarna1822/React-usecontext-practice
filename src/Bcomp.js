import React from 'react'
import { useContext } from 'react'
import { store } from './App'

const Bcomp = () => {
    const [data, setData]=useContext(store);
  return (
    <div>
      Component B  {data}
    </div>
  )
}

export default Bcomp
