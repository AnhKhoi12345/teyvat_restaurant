import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
  const footerLogo = [
    { id: 1, icon: 'fa-brands fa-facebook-f', link: '/' },
    { id: 2, icon: 'fa-brands fa-x-twitter', link: '/' },
    { id: 3, icon: 'fa-brands fa-youtube', link: '/' },
  ];
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
              <a href="https://www.hoyoverse.com/en-us">Hoyoverse Website</a>
            </p>
            <p>
              <a href="https://www.hoyoverse.com/en-us/about-us">Basic info about Hoyoverse</a>
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/MiHoYo#History">About history of Hoyoverse</a>
            </p>
          </div>
          <div className="footer-time">
            <h3>About Us: HoyoFood</h3>
            <p>
              <Link className="hoyofood-about-link" to="/about#history">
                History of HoyoFood
              </Link>
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
          <div className="gallery-container"></div>
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
