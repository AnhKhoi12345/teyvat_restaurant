import { Button } from 'primereact/button';
import Navbar from '../Navbar';
import './header.scss';
import { useEffect, useRef, useState } from 'react';
import useTimeout from '../../customHook';
import { Link } from 'react-router-dom';

function Header() {
  // const [headerImg, setHeaderImg] = useState(1);
  const headerContainer = useRef(null);
  const sliderButtonLeft = useRef(null);
  const sliderButtonRight = useRef(null);
  let counter = 1;
  useEffect(() => {
    displayHeaderImg(1);
    // autoHeader();
  });
  const autoHeader = () => {
    const timer = setInterval(() => {
      changeHeaderImg(1);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  };
  //interval shits yoink from stackoverflow, dont know why only using setInterval result in 'Cannot read properties of null (reading 'style')' error
  const displaySliderButon = () => {
    sliderButtonLeft.current.style.display = 'block';
    sliderButtonRight.current.style.display = 'block';
    console.log('mouse enter or leave header detected!');
  };
  const hideSliderButon = () => {
    sliderButtonLeft.current.style.display = 'none';
    sliderButtonRight.current.style.display = 'none';
    console.log('mouse enter or leave header detected!');
  };
  const displayHeaderImg = (headerImg) => {
    console.log('executing displayHEaderImg');
    if (headerImg === 1) {
      headerContainer.current.style.background = 'url(https://i.imgur.com/TbG4NMQ.jpeg) top no-repeat ';
      headerContainer.current.style.backgroundSize = '100% 100%';
    } else if (headerImg === 2) {
      headerContainer.current.style.background = 'url(https://i.imgur.com/Fkmmhly.png) top no-repeat ';
      headerContainer.current.style.backgroundSize = '100% 100%';
    } else if (headerImg === 3) {
      headerContainer.current.style.background = 'url(https://i.imgur.com/6fpiW59.png) top no-repeat ';
      headerContainer.current.style.backgroundSize = '100% 100%';
    } else console.log('Header img count Error');
  };
  const changeHeaderImg = (x) => {
    counter += x;
    if (counter < 1) {
      counter = 3;
      displayHeaderImg(counter);
    } else if (counter > 3) {
      counter = 1;
      displayHeaderImg(counter);
    } else displayHeaderImg(counter);
  };
  return (
    <div className="header">
      <Navbar />
      <div
        className="header-container"
        onMouseEnter={() => {
          displaySliderButon();
        }}
        onMouseLeave={() => {
          hideSliderButon();
        }}
        ref={headerContainer}
      >
        <div className="header-flex">
          <h2 className="header-welcome">Welcome to</h2>
          <h1 className="header-title">Teyvat's Restaurant</h1>
          <Link to="/menu">
            <Button className="look-menu-btn" label="LOOK MENU" severity="danger" outlined />
          </Link>
        </div>
        <div
          className="header-slider-left header-slider-btn"
          ref={sliderButtonLeft}
          onClick={() => {
            changeHeaderImg(-1);
          }}
        >
          &#60;
        </div>
        <div
          className="header-slider-right header-slider-btn"
          ref={sliderButtonRight}
          onClick={() => {
            changeHeaderImg(1);
          }}
        >
          &#62;
        </div>
        <ul className="header-slider-dot-btn-container">
          <li
            className="header-slider-dot-btn1 header-slider-dot"
            onClick={() => {
              displayHeaderImg(1);
              counter = 1;
            }}
          ></li>
          <li
            className="header-slider-dot-btn2 header-slider-dot"
            onClick={() => {
              displayHeaderImg(2);
              counter = 2;
            }}
          ></li>
          <li
            className="header-slider-dot-btn3 header-slider-dot"
            onClick={() => {
              displayHeaderImg(3);
              counter = 3;
            }}
          ></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
