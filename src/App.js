import React, { useState, useEffect } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'; // Importe os estilos do Font Awesome
import ImageCarousel from './ImageCarousel';

function App() {

  const images = [
    'https://blog.lojaquebec.com.br/wp-content/uploads/2021/04/estilos-de-roupa-masculino.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_823637-MLB54270667841_032023-O.webp',
    '',
  ];
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
              <i className="fa fa-brazilian-real-sign"></i>
          </li>
        </div>
      </nav>
      <div className="Slider">
      <ImageCarousel images={images} />
    </div>
    </div>
    
  );
}

export default App;
