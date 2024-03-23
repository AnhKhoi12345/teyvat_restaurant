import './home.scss';
import charlotteSpecialty from '../../images/ExclusiveScoopGourmetColumn1.webp';
import restaurant4 from '../../images/restaurant4.jpg';
import energizingBento from '../../images/EnergizingBento.webp';
import sunsetBerryTea from '../../images/SunsetBerryTea.webp';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
      <section className="body-welcome-container">
        <div className="body-welcome-text">
          <h3 className="body-restaurant-name">Teyvatian Restaurant</h3>
          <h2 className="body-welcome">WELCOME</h2>
          <p className="body-weldome-p">
            Welcome Travelers to the official restaurant run by Hoyofood, here travelers can enjoy many wonderful
            Teyvatian dishes from many nations from Genshin Impact
          </p>
          <Link className="our-story" to="/menu">
            <b>
              OUR STORY <i class="fa-solid fa-arrow-right"></i>
            </b>
          </Link>
        </div>
        <div className="body-welcome-image-container">
          <img className="body-welcome-image" src={charlotteSpecialty} alt="Charlottes Specialty" />
        </div>
      </section>
      <section className="body-discover">
        <div className="discover-parallax">
          <div className="parallax-overlay">
            <h3 className="parallax-discover">Discover</h3>
            <h2 className="parallax-teyvat">Teyvat's Restaurant</h2>
          </div>
        </div>
        <div className="discover-flex-container">
          <div className="discover-item">
            <Link to="/about">
              <div className="discover-image-container">
                <img className="discover-image" src={restaurant4} alt="Restaurant4" />
              </div>
            </Link>
            <h3 className="discover-title">FANTASTIC RESTAURANT</h3>
            <p className="discover-p">
              Find out about our wonderful and lively restaurant, where travelers can enjoy food with friends
            </p>
            <Link className="discover-learn-more" to="/about">
              <b>
                LEARN MORE <i class="fa-solid fa-arrow-right"></i>
              </b>
            </Link>
          </div>
          <div className="discover-item">
            <Link to="/menu">
              <div className="discover-image-container">
                <img className="discover-image" src={energizingBento} alt="Bento" />
              </div>
            </Link>
            <h3 className="discover-title">DELICIOUS FOOD</h3>
            <p className="discover-p">
              Many beloved food from Monstadt to Fontaine have been recreated by professional chefs
            </p>
            <Link className="discover-learn-more" to="/menu">
              <b>
                LEARN MORE <i class="fa-solid fa-arrow-right"></i>
              </b>
            </Link>
          </div>
          <div className="discover-item">
            <Link to="/menu">
              <div className="discover-image-container">
                <img className="discover-image" src={sunsetBerryTea} alt="Berry tea" />
              </div>
            </Link>
            <h3 className="discover-title">GREAT DRINK</h3>
            <p className="discover-p">Not only food, you can also enjoy refresh drinks from Teyvat</p>
            <Link className="discover-learn-more" to="/menu">
              <b>
                LEARN MORE <i class="fa-solid fa-arrow-right"></i>
              </b>
            </Link>
          </div>
        </div>
      </section>
      <section className="body-menu">
        <h3 className="menu-discover">Discover</h3>
        <h2 className="our-menu">OUR MENU</h2>
      </section>
    </div>
  );
}

export default Home;
