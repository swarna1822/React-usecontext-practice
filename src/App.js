import React,{createContext, useState} from 'react';
import Count from './count';
import Display from './display';

export const  store = createContext()

function App() {
  const [data, setData]= useState([
    {
      brandName:"Lenevo"
    },
    {
      brandName:"Apple"
    }
  ])
  return (
    <store.Provider value={[data, setData]}>
      <div>
      <center>
      <Count/>
      <Display/>
      
      </center>
     
    </div>
    </store.Provider>
    
  );
}

export default App;
