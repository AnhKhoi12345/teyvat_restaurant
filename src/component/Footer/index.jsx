import { Link } from 'react-router-dom';
import './footer.scss';
import foodApi from '../../api/foodApi';
import { useEffect, useState, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { HashLink } from 'react-router-hash-link';
// import { PhotoService } from './service/PhotoService';
function Footer() {
  const [food, setFood] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);

  useEffect(() => {
    foodApi.getAll().then((data) =>
      // setFood(data)
      {
        let foodList = data.slice(0, 12);
        setFood(foodList);
      }
    );
  }, []);
  const footerLogo = [
    { id: 1, icon: 'fa-brands fa-facebook-f', link: '/' },
    { id: 2, icon: 'fa-brands fa-x-twitter', link: '/' },
    { id: 3, icon: 'fa-brands fa-youtube', link: '/' },
  ];
  const itemTemplate = (item) => {
    return (
      <img src={`http://localhost:3001/uploads/${item.image}`} alt="" style={{ width: '100%', display: 'block' }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={`http://localhost:3001/uploads/${item.image}`} alt="" style={{ display: 'block' }} />;
  };
  return (
    <div className="footer-container">
      <div className="footer-flex">
        <div className="footer-item footer-item-1">
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <p>
              <i class="fa-solid fa-location-dot"></i> Hoyoverse HQ, Shanghai, China
            </p>
            <p>
              <i class="fa-solid fa-phone"></i> 0898485044
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> HoyoFood@gmail.com
            </p>
          </div>
          <div className="footer-time">
            <h3>OPENING TIME</h3>
            <p>09:00 AM - 11:00 PM</p>
            <p>Every Day</p>
          </div>
        </div>
        <div className="footer-item footer-item-2">
          {/* <a
            class="twitter-timeline"
            data-width="800"
            data-height="600"
            data-theme="dark"
            href="https://twitter.com/GenshinImpact?ref_src=twsrc%5Etfw"
          >
            Tweets by GenshinImpact
          </a>{' '}
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
          <div className="footer-contact">
            <h3>About Parent Company: Hoyoverse</h3>
            <p>
              <a href="https://www.hoyoverse.com/en-us" target="_blank">
                Hoyoverse Website
              </a>
            </p>
            <p>
              <a href="https://www.hoyoverse.com/en-us/about-us" target="_blank">
                Basic info about Hoyoverse
              </a>
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/MiHoYo#History" target="_blank">
                About history of Hoyoverse
              </a>
            </p>
          </div>
          <div className="footer-time">
            <h3>About Us: HoyoFood</h3>
            <p>
              <HashLink className="hoyofood-about-link" to="/about#history">
                History of HoyoFood
              </HashLink>
            </p>
            <p>
              <Link className="hoyofood-about-link" to="/about">
                Info of HoyoFood
              </Link>
            </p>
          </div>
        </div>
        <div className="footer-item footer-item-3">
          <h3 className="gallery-h3">Gallery work in progress....</h3>
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
        </div>
      </div>
      <div className="footer-end">
        <div className="icon-container">
          {footerLogo.map((item) => {
            return (
              <li className="navLogo-item" key={item.id}>
                <Link to={item.link}>
                  <i className={item.icon}></i>
                </Link>
              </li>
            );
          })}
        </div>
        <div className="text-container">@ 2024 HoyoFood</div>
      </div>
    </div>
  );
}

export default Footer;
