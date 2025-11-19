import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Landing from './components/landing';
import "./index.css";
import { useState } from 'react';


function App() {
  const [users,setUsers] = useState(
        [
          {
            username:"ilaya",
            password:"1234"
          }
        ])
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
    <Route path='/Signup' element={<Signup  users={users} setUsers={setUsers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App
