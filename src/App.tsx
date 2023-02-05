import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from './component/Product';
import { BackendResp } from './models';
import Loader from './utils/Loader';

function App() {
  const [prod, setProd] = useState<BackendResp>()
  const [load, setLoad] = useState(true)
  const [error, setError] =useState(false)
  async function fetchTable(): Promise<BackendResp>{
    try {
      const resp = await fetch('http://localhost:3001/readDBF')
      if (resp.ok) {        
        return await resp.json()
      }
      
      throw new Error(resp.statusText)
    }
    catch(e) {
      setError(true)
      throw e
    }    
}

  useEffect(() => {
    fetchTable().then( p =>
      {setProd(p)
      setTimeout(() => {
        setLoad(false) //таймаут для имитации загрузки данных с сервера
      }, 3000)
      }
    )    
  }, [])

  return (
    <div>
      <header className="App-header">
        <p>Динамика добычи нефти по месторождению Северное</p>  
      </header>
      <div>
        {load && !error 
          ? <div className='loader'><Loader/></div>
          : prod?.status && <Product prod={prod.data}/>
        }
        {error && <h1 className='textalert'>Ошибка</h1>}
      </div>  
    </div>
  );  
}

export default App;
