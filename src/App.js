import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { setUserAddress } from './api';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

function App() {
  const [data,setData] = useState([]);
  useEffect(()=> {
    async function getStatus() {
      const res = await setUserAddress()
      setData(res.results)
  };
  getStatus()
  },[])
  return ( 
    <Routes>
      <Route  path="/"  element={<Home data={data}/>} />
      <Route path="/contact/:id" element={<UserDetail data={data}/>} />
  </Routes>
  );
}

export default App;
