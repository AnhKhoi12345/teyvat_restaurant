import { Link } from 'react-router-dom';
import './navbar.scss';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

function Navbar() {
  const navlogo = useRef(null);
  const navbar = useRef(null);
  const menuBtn = useRef(null);
  const navList = [
    { id: 1, name: 'HOME', link: '/' },
    { id: 2, name: 'ABOUT', link: '/about' },
    { id: 3, name: 'MENU', link: '/menu' },
    { id: 4, name: 'EVENT', link: '/event' },
    { id: 5, name: 'NEWS', link: '/news' },
    { id: 6, name: 'CONTACT', link: '/contact' },
  ];
  const navLogoList = [
    { id: 1, icon: 'fa-brands fa-facebook-f', link: '/' },
    { id: 2, icon: 'fa-brands fa-x-twitter', link: '/' },
    { id: 3, icon: 'fa-brands fa-youtube', link: '/' },
  ];
  // eslint-disable-next-line no-array-constructor
  const navListArray = useRef(new Array());
  const navIconArray = useRef(new Array());
  const navbarScroll = () => {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 10) {
      navbar.current.style.backgroundColor = 'rgb(255, 255, 255,0.8)';
      navlogo.current.style.background = 'url("https://i.imgur.com/3aE4bds.png") top no-repeat';
      navlogo.current.style.backgroundSize = 'contain';
      menuBtn.current.style.color = 'black';
      for (let i = 0; i < navList.length; i++) {
        navListArray.current[i].style.color = 'black';
      }
      for (let i = 0; i < navLogoList.length; i++) {
        navIconArray.current[i].style.color = 'black';
      }
    } else {
      for (let i = 0; i < navList.length; i++) {
        navListArray.current[i].style.color = 'white';
      }
      for (let i = 0; i < navLogoList.length; i++) {
        navIconArray.current[i].style.color = 'white';
      }
      navlogo.current.style.background = navbar.current.style.backgroundColor = '';
      menuBtn.current.style.color = '';
    }
  };
  window.addEventListener('scroll', navbarScroll);
  return (
    <nav className="navbar-container" ref={navbar}>
      <Link className="navLogo" ref={navlogo} to="/"></Link>
      <ul className="navList">
        {navList.map((item) => {
          return (
            <li className="navList-item" key={item.id}>
              <Link ref={(element) => navListArray.current.push(element)} to={item.link} className="navList-item-text">
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
                <i ref={(element) => navIconArray.current.push(element)} className={item.icon}></i>
              </Link>
            </li>
          );
        })}
      </ul>
      <Button text aria-label="Filter" size="large">
        {' '}
        <i ref={menuBtn} className="fa-solid fa-bars"></i>
      </Button>
    </nav>
  );
}

export default Navbar;
