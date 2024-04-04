import { Link } from 'react-router-dom';
import './navbar.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { HashLink } from 'react-router-hash-link';
import { Galleria } from 'primereact/galleria';
import foodApi from '../../api/foodApi';
import { classNames } from 'primereact/utils';
function Navbar() {
  const [food, setFood] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);

  useEffect(() => {
    foodApi.getAll().then((data) =>
      // setFood(data)
      {
        let foodList = data.slice(0, 9);
        setFood(foodList);
      }
    );
  }, []);
  const [sidebar, setSidebar] = useState(true);
  const overlay = useRef(null);
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
  // eslint-disable-next-line no-array-constructor
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
      menuBtn.current.style.color = 'white';
    }
  };
  window.addEventListener('wheel', navbarScroll);
  const callSidebar = () => {
    setSidebar(sidebar ? false : true);
    if (sidebar) {
      overlay.current.style.display = 'block';
    } else {
      setTimeout(() => {
        overlay.current.style.display = 'none';
      }, 500);
    }
  };
  const noCallSidebar = (event) => {
    event.stopPropagation();
  };
  const itemTemplate = (item) => {
    return (
      <img src={`http://localhost:3001/uploads/${item.image}`} alt="" style={{ width: '100%', display: 'block' }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={`http://localhost:3001/uploads/${item.image}`} alt="" style={{ display: 'block' }} />;
  };
  return (
    <>
      <nav className="navbar-container" ref={navbar}>
        <Link className="navLogo" ref={navlogo} to="/"></Link>
        <ul className="navList">
          {navList.map((item) => {
            return (
              <li className="navList-item" key={item.id}>
                <Link
                  ref={(element) => navListArray.current.push(element)}
                  to={item.link}
                  className="navList-item-text"
                >
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
        <Button
          icon="pi pi-bars"
          rounded
          text
          aria-label="Filter"
          ref={menuBtn}
          style={{ color: 'white' }}
          onClick={callSidebar}
        />
      </nav>
      <div className="sidebar-overlay" ref={overlay} onClick={callSidebar}>
        <nav className={classNames('sidebar-container', sidebar ? 'hide' : 'show')} onClick={noCallSidebar}>
          <Button
            size="large"
            className="sidebar-button"
            icon="pi pi-times"
            rounded
            text
            aria-label="Filter"
            style={{ color: 'black' }}
            onClick={callSidebar}
          />
          <ul className="sidebar-list">
            {navList.map((item) => {
              return (
                <li className="sidebar-item" key={item.id}>
                  <Link
                    ref={(element) => navListArray.current.push(element)}
                    to={item.link}
                    className="sidebar-item-text"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <HashLink to="/#reservation">
            <Button className="reservation-button" label="BOOK TABLE"></Button>
          </HashLink>
          <h3 className="gallery-h3">GALLERY</h3>
          <div className="card flex justify-content-center gallery-container">
            <Galleria
              ref={galleria}
              value={food}
              numVisible={7}
              style={{ maxWidth: '850px' }}
              activeIndex={activeIndex}
              onItemChange={(e) => setActiveIndex(e.index)}
              circular
              fullScreen
              showItemNavigators
              showThumbnails={false}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
            <div className="gallery-grid">
              {food &&
                food.map((item, index) => {
                  let imgEl = (
                    <img
                      src={`http://localhost:3001/uploads/${item.image}`}
                      alt=""
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setActiveIndex(index);
                        galleria.current.show();
                      }}
                    />
                  );
                  return (
                    <div className="gallery-image-container" key={index}>
                      {imgEl}
                    </div>
                  );
                })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
