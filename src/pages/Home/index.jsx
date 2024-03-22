import './home.scss';
import charlotteSpecialty from '../../images/ExclusiveScoopGourmetColumn1.webp';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
      <section className="body-welcome-container">
        <div className="body-welcome-text">
          <h2 className="body-restaurant-name">Teyvatian Restaurant</h2>
          <h1 className="body-welcome">WELCOME</h1>
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
    </div>
  );
}

export default Home;
