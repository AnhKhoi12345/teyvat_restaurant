import { Button } from 'primereact/button';
import Navbar from '../Navbar';
import './header.scss';
import { useRef } from 'react';

function Header() {
  const sliderButtonLeft = useRef(null);
  const sliderButtonRight = useRef(null);
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
      >
        <div className="header-flex">
          <h2 className="header-welcome">Welcome to</h2>
          <h1 className="header-title">Teyvat's Restaurant</h1>
          <Button className="look-menu-btn" label="LOOK MENU" severity="danger" outlined />
        </div>
        <div className="header-slider-left header-slider-btn" ref={sliderButtonLeft}>
          &#60;
        </div>
        <div className="header-slider-right header-slider-btn" ref={sliderButtonRight}>
          &#62;
        </div>
        <ul className="header-slider-dot-btn-container">
          <li className="header-slider-dot-btn1 header-slider-dot"></li>
          <li className="header-slider-dot-btn2 header-slider-dot"></li>
          <li className="header-slider-dot-btn3 header-slider-dot"></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
