import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './auth/Register';
import Login from './auth/Login';
import Home from './Home';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div className="app">
      <BrowserRouter>
        <Login setToken={setToken} />
      </BrowserRouter>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
            <Route path="/register" element={<Register/>} exact/>
            <Route path="/login" element={<Login/>} exact/>
            <Route path='/home' element={<Home/>} exact/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
