import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
 
const Home = ({ addToCart, products }) => (
  <div className={styles.Home} data-testid="Home">
    <header className="header">
      <div className="header-logo">
        <h1>TrendNet</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main-content">
      <section className="product-list">
        <h2>Lámparas</h2>
        <div className="product-items-container">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: {product.price}</p>
              <button>
                <Link to={`/product/${product.id}`}>Ver detalles</Link>
              </button>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 TrendNet. Todos los derechos reservados.</p>
        <ul>
          <li>
            <a href="#">Política de privacidad</a>
          </li>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);
 
Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
const products = [
  {
    id: 1,
    name: 'Lámpara de Mesa',
    price: 29617.5,
    image: 'lampmesa.jpg',
    description: 'Lámpara de mesa de diseño moderno',
  },
  {
    id: 2,
    name: 'Lámpara Piso Decorativa',
    price: 46087.5,
    image: 'Lamparadepiso.jpg',
    description: 'Lámpara de piso decorativa de diseño moderno',
  },
  {
    id: 3,
    name: 'Lámpara de Techo Basketball',
    price: 38000.0,
    image: 'lapbasketball.jpg',
    description: 'Lámpara de techo de bola de basketball',
  },
  {
    id: 4,
    name: 'Lámpara de Pie Minimalista',
    price: 55000.0,
    image: 'lampmini.jpg',
    description: 'Lámpara de pie minimalista ',
  },
  {
    id: 5,
    name: 'Lámpara de Escritorio LED',
    price: 32000.0,
    image: 'lampescri.jpg',
    description: 'Lámpara de escritorio LED con despegable',
  },
  {
    id: 6,
    name: 'Lámpara Colgante Nórdica',
    price: 42000.0,
    image: 'lampnord.jpg',
    description: 'Lámpara colgante estilo nórdico ',
  },
  {
    id: 7,
    name: 'Lámpara de Pared Industrial',
    price: 49000.0,
    image: 'lamppared.jpg',
    description: 'Lámpara de pared estilo industrial ',
  },
  {
    id: 8,
    name: 'Lámpara de Mesa Retro',
    price: 36000.0,
    image: 'lampretro.jpg',
    description: 'Lámpara de mesa retro con base de madera',
  },
  {
    id: 9,
    name: 'Lámpara Colgante Geométrica',
    price: 58000.0,
    image: 'Lampgeometrico.jpg',
    description: 'Lámpara colgante geométrica de diseño contemporáneo',
  },
  {
    id: 10,
    name: 'Lámpara de Pie Trípode',
    price: 65000.0,
    image: 'lamptrip.jpg',
    description: 'Lámpara de pie trípode con pantalla de lino',
  },
];
 
export default Home;

