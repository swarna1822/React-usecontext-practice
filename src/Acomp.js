import React from 'react'
import { useContext } from 'react'
import { store } from './App';

const Acomp = () => {
const [data, setData]=useContext(store);
  return (
    <div className='card'>
      A component {data}
    </div>
  )
}

export default Acomp
