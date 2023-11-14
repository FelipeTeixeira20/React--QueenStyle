import React, { useState, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css"; // Importe os estilos do Font Awesome
import ImageCarousel from "./ImageCarousel";

const produtos = [
  {
    id: 1,
    nome: "CAMISETA MEOWGIC",
    categoria: "Masculino",
    descricao: "Camiseta Regular Em Meia Malha Com Estampa Rosto de Leão Preto",
    preco: 39.99,
    imagem: "image/Camisa1.png",
  },
  {
    id: 2,
    nome: "CAMISETA ROSTO DE LEÃO PRETO",
    categoria: "Masculino",
    descricao: "Camiseta Regular Em Meia Malha Com Estampa Rosto De Leão Preto",
    preco: 59.99,
    imagem: "image/Camisa2.png",
  },
  {
    id: 3,
    nome: "BERMUDA ALGODÃO BEGE",
    categoria: "Masculino",
    descricao: "Bermuda em Algodão com Cós Elástico e Bolsos Cargo",
    preco: 89.99,
    imagem: "image/Bermuda1.jpg",
  },
  {
    id: 4,
    nome: "CALÇA SLIM JEANS AZUL",
    categoria: "Masculino",
    descricao: "Calça Slim Jeans Com Bolsos E Pesponto Contrastante Azul",
    preco: 139.99,
    imagem: "image/Calca1.jpg",
  },
  {
    id: 5,
    nome: "KIT 03 MEIAS INFANTIS ALGODÃO",
    categoria: "Masculino",
    descricao:
      "Kit 03 Meias Infantis Em Algodão Com Dobra Dupla - Tam 0 A 12 Meses Preto/Cinza/Branco",
    preco: 35.9,
    imagem: "image/KitMeias.jpG",
  },
  {
    id: 6,
    nome: "BODY INFANTIL KIMONO COM ESTAMPA DE NUVEM",
    categoria: "Feminino",
    descricao:
      "Body Infantil Kimono Com Estampa De Nuvem - Tam RN A 09 Meses Branco",
    preco: 49.99,
    imagem: "image/Body.jpg",
  },
  {
    id: 7,
    nome: "BLUSA CROPPED EM TULE",
    categoria: "Feminino",
    descricao:
      "Blusa Cropped Em Tule Com Manga Soltinha E Estampa Tropical Azul",
    preco: 79.99,
    imagem: "image/Crop.jpg",
  },
  {
    id: 8,
    nome: "VESTIDO MIDI JEANS",
    categoria: "Feminino",
    descricao:
      "Vestido Midi Jeans Com Elástico Nas Alças E Babado Na Barra Azul",
    preco: 199.99,
    imagem: "image/VestidoAzul.jpg",
  },
  {
    id: 9,
    nome: "PIJAMA CURTO EM VISCOLYCRA",
    categoria: "Feminino",
    descricao: "Pijama Curto Em Viscolycra Com Estampa Stitch Azul/ Branco",
    preco: 59.99,
    imagem: "image/Pijama.jpg",
  },
  {
    id: 10,
    nome: "CALÇA SKINNY CINTURA ALTA JEANS",
    categoria: "Feminino",
    descricao:
      "Calça Skinny Cintura Alta Em Jeans Estonado Com Zíper Na Barra Preto Estonado",
    preco: 159.99,
    imagem: "image/CalcaF.jpg",
  },
  {
    id: 11,
    nome: "CALÇA SKINNY CINTURA ALTA JEANS",
    categoria: "Infantil",
    descricao:
      "Calça Skinny Cintura Alta Em Jeans Estonado Com Zíper Na Barra Preto Estonado",
    preco: 159.99,
    imagem: "image/CalcaF.jpg",
  },
  {
    id: 12,
    nome: "CALÇA SKINNY CINTURA ALTA JEANS",
    categoria: "Infantil",
    descricao:
      "Calça Skinny Cintura Alta Em Jeans Estonado Com Zíper Na Barra Preto Estonado",
    preco: 159.99,
    imagem: "image/CalcaF.jpg",
  },
  {
    id: 13,
    nome: "CALÇA SKINNY CINTURA ALTA JEANS",
    categoria: "Infantil",
    descricao:
      "Calça Skinny Cintura Alta Em Jeans Estonado Com Zíper Na Barra Preto Estonado",
    preco: 159.99,
    imagem: "image/CalcaF.jpg",
  },
  {
    id: 14,
    nome: "CALÇA SKINNY CINTURA ALTA JEANS",
    categoria: "Infantil",
    descricao:
      "Calça Skinny Cintura Alta Em Jeans Estonado Com Zíper Na Barra Preto Estonado",
    preco: 159.99,
    imagem: "image/CalcaF.jpg",
  },
  {
    id: 15,
    nome: "CALÇA SKINNY CINTURA ALTA JEANS",
    categoria: "Infantil",
    descricao:
      "Calça Skinny Cintura Alta Em Jeans Estonado Com Zíper Na Barra Preto Estonado",
    preco: 159.99,
    imagem: "image/CalcaF.jpg",
  },
];

const Produto = ({ produto }) => (
  <div id={`produto-${produto.categoria}-${produto.id}`} className="produto">
    <img src={produto.imagem} alt={produto.nome} />
    <h3>{produto.nome}</h3>
    <p>{produto.descricao}</p>
    <p>Preço: R$ {produto.preco.toFixed(2)}</p>
    <button>Adicionar ao Carrinho</button>
  </div>
);

const Loja = () => (
  <div className="loja">
    {/* Seção Masculino */}
    <h2 id="Masculino" className="titulo-secao">
      Masculino
    </h2>
    <div className="produtos">
      {produtos
        .filter((produto) => produto.categoria === "Masculino")
        .map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
    </div>

    {/* Seção Feminino */}
    <h2 id="Feminino" className="titulo-secao">
      Feminino
    </h2>
    <div className="produtos">
      {produtos
        .filter((produto) => produto.categoria === "Feminino")
        .map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
    </div>

    {/* Seção Infantil */}
    <h2 id="Infantil" className="titulo-secao">
      Infantil
    </h2>
    <div className="produtos">
      {produtos
        .filter((produto) => produto.categoria === "Infantil")
        .map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
    </div>
  </div>
);

function App() {
  const images = [
    "image/Homens.png",
    "image/Mulheres.png",
    "image/mulheres2.png",
  ];
  // Função para manipular o clique e rolar suavemente até a seção desejada
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <header className="cabecalho-principal-QUEENSTYLE">
        <img
          className="img-QUEENSTYLE-cabecalho-principal"
          src="image/QUEENSTYLE.png"
          alt="QUEENSTYLE"
        />
      </header>
      <nav className="navbar">
        <ul className="navbar-list">
          {/* Links atualizados para Masculino, Feminino e Infantil */}
          <li className="navbar-item">
            <a
              onClick={(e) => handleScroll(e, "Masculino")}
              data-text="Masculino"
            >
              Masculino
            </a>
          </li>
          <li className="navbar-item">
            <a
              onClick={(e) => handleScroll(e, "Feminino")}
              data-text="Feminino"
            >
              Feminino
            </a>
          </li>
          <li className="navbar-item">
            <a
              onClick={(e) => handleScroll(e, "Infantil")}
              data-text="Infantil"
            >
              Infantil
            </a>
          </li>
          {/* Botão Promoção adicionado novamente */}
          <li className="navbar-item">
            <a href="#Promocao" data-text="Promoção">
              Promoção
            </a>
          </li>
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
      <div className="aplicativo">
        <div className="column">
          <button className="button">Coleções</button>
          <button className="button">Coleções</button>
        </div>
        <div className="column">
          <button className="button">Coleções</button>
          <button className="button">Coleções</button>
        </div>
        <div className="columnD">
          <button className="buttonD">Destaques</button>
        </div>
      </div>
      <div>
        <Loja />
      </div>
    </div>
  );
}
export default App;
