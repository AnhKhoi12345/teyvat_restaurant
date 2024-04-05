import { Button } from 'primereact/button';
import './propHeader.scss';
import { useEffect, useRef, useState } from 'react';
import useTimeout from '../../customHook';
import { Link } from 'react-router-dom';
import menuImg from '../../images/ChevreuseYT.png';
function PropHeader(props) {
  // const [headerImg, setHeaderImg] = useState(1);

  const headerContainer = useRef(null);
  return (
    <div
      className="prop-header"
      //   ref={headerContainer}
      style={{
        background: props.img,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="header-container">
        <div className="header-flex">
          {/* <h2 className="header-welcome">Welcome to</h2> */}
          <h1 className="header-title">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default PropHeader;
