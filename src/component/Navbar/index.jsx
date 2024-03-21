import { Link } from 'react-router-dom';
import './navbar.scss';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

function Navbar() {
  const navlogo = useRef(null);
  const navList = [
    { id: 1, name: 'HOME', link: '/' },
    { id: 2, name: 'ABOUT', link: '/about' },
    { id: 3, name: 'MENU', link: '/menu' },
    { id: 4, name: 'DISCOUNT', link: '/discount' },
    { id: 5, name: 'NEWS', link: '/news' },
    { id: 6, name: 'CONTACT', link: '/contact' },
  ];
  const navLogoList = [
    { id: 1, icon: 'fa-brands fa-facebook-f', link: '/' },
    { id: 2, icon: 'fa-brands fa-x-twitter', link: '/' },
    { id: 3, icon: 'fa-brands fa-youtube', link: '/' },
  ];

  return (
    <nav className="navbar-container">
      <Link className="navLogo" ref={navlogo} to="/"></Link>
      <ul className="navList">
        {navList.map((item) => {
          return (
            <li className="navList-item" key={item.id}>
              <Link to={item.link} className="navList-item-text">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="navLogoList">
        {navLogoList.map((item) => {
          return (
            <li className="navLogo-item" key={item.id}>
              <Link to={item.link}>
                <i className={item.icon}></i>
              </Link>
            </li>
          );
        })}
      </ul>
      <Button icon="fa-solid fa-bars" rounded text aria-label="Filter" size="large"></Button>
    </nav>
  );
}

export default Navbar;
