import React, {useContext, useState} from 'react'
import { store } from './App'
const Display = () => {
    const [data, setData]=useContext(store);
    const [name, setName]= useState('');
    const submitHandler = e =>{
        e.preventDefault();
        setData([...data, {brandName:name}])
    }
  return (
    <center>
    <div className='card'>
        <div className='card-body'>
            <h3>Display Products</h3>
            {data.map((item)=><p>{item.brandName}</p>)}
            <form className='form' onSubmit={submitHandler}>
                <input type="text" placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)}/>
                <input className='btn btn-primary m-2' type="submit" value="Add"/>
            </form>
        </div>
      
    </div>
    </center>
  )
}

export default Display
