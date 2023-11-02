import React, { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'; // Importe os estilos do Font Awesome
import Slider from './Slider';

function App() {
  return (
    <div>
      <header>
        <img 
          src="image/QUEENSTYLE.jpeg" alt="QUEENSTYLE"
          width="100%"
          height="100"
        />
      </header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="#">Feminino</a></li>
          <li className="navbar-item"><a href="#">Masculino</a></li>
          <li className="navbar-item"><a href="#">Infantil</a></li>
          <li className="navbar-item"><a href="#">Promoção</a></li>
        </ul>
        <div className="no-bullet">
          <li className="navbar-item search-icon">
              <input type="text" placeholder="Pesquisar..." />
              <i className="fa fa-search"></i>
              <i className="fa fa-heart"></i>
              <i className="fa fa-user"></i>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default App;
