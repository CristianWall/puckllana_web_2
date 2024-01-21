// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import Login from './componentes/login';
import Register from './componentes/register';
import Home from './componentes/home';
import Food_page from './componentes/food_page';
import Alojamiento from './componentes/alojamiento/alojamiento';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe(); // ¡Posible corrección! Se agrega la llamada a la función 'unsubscribe' para evitar fugas de memoria.
    };
  }, []); // ¡Posible observación! La dependencia está vacía, lo cual podría indicar que esta función useEffect solo debería ejecutarse una vez.


  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/food" element={<Food_page/>} ></Route>
        <Route path="/alojamiento" element={<Alojamiento/>} ></Route>

      </Routes>
    </Router>
  );
};
export default App;



