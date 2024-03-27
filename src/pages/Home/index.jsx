import './home.scss';
import '/node_modules/primeflex/primeflex.css';
import charlotteSpecialty from '../../images/ExclusiveScoopGourmetColumn1.webp';
import restaurant1 from '../../images/restaurant1.jpg';
import restaurant4 from '../../images/restaurant4.jpg';
import energizingBento from '../../images/EnergizingBento.webp';
import sunsetBerryTea from '../../images/SunsetBerryTea.webp';
import crispyPotatoShrimpPlatter from '../../images/CrispyPotatoShrimpPlatter.webp';
import riceBun from '../../images/RiceBuns.webp';
import tricolorDango from '../../images/TricolorDango.webp';
import yearning from '../../images/ColleiYearning.webp';
import appleCider from '../../images/AppleCider.webp';
import seabirdsSojourn from '../../images/FreminetSeabirdsSojourn.webp';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import InputForm from './components/InputForm';
import { Carousel } from 'primereact/carousel';
import { useState } from 'react';
import fischlAvatar from '../../images/fischlAvatar.png';
import thomaAvatar from '../../images/thomaAvatar.png';
import nahidaAvatar from '../../images/nahidaAvatar.webp';
import zhongliAvatar from '../../images/zhongliAvatar.png';
import xingqiuAvatar from '../../images/xingqiuAvatar.webp';
import discountEvent from '../../images/discountEvent.webp';
import coffeeCollab from '../../images/coffeCollab.webp';
import branch from '../../images/branch.jpg';
import { Dialog } from 'primereact/dialog';
import SignUpForm from './components/SignUpForm';
function Home() {
  const newsList = [
    {
      id: 1,
      title: 'New merchandise dicount event in Teyvat Restaurant',
      text: 'In 2nd April, we will open an official merch shop at the restaurant, if you have eaten there, you will receive discount for merchs',
      link: '/news',
      image: discountEvent,
    },
    {
      id: 2,
      title: 'New collaboration with coffee Seol shop',
      text: 'A exciting oversea collab with coffee shop in Seol will be begin on 10th May. Customer will be able to enjoy delicous Teyvat drinks in Korea',
      link: '/news',
      image: coffeeCollab,
    },
    {
      id: 3,
      title: 'A new oversea branch of restaurant may come true!',
      text: 'HoyoFood are planning to extend our reach to oversea, a new Teyvat Restaurant branch will lkely open in the US',
      link: '/news',
      image: branch,
    },
  ];
  const [youtubeID] = useState('8BLjG4Cof1U');
  const [visible, setVisible] = useState(false);
  const pyro = 'red';
  const electro = 'purple';
  const hydro = 'blue';
  const dendro = 'green';
  const geo = 'yellow';
  const reviewList = [
    {
      id: 1,
      name: 'Thomnas',
      image: thomaAvatar,
      text: 'Lots of amazing Inazuman food, also Mondstatd remind me of food from my hometown, i recommend at least try once at this place.',
      star: '5',
      element: pyro,
    },
    {
      id: 2,
      name: 'Anonymous',
      image: nahidaAvatar,
      text: 'I have always dream to eat food from the hit game Genshin Impact, especially Sumeran food',
      star: '5',
      element: dendro,
    },
    {
      id: 3,
      name: 'Amy',
      image: fischlAvatar,
      text: 'Fantastisch!!!',
      star: '4',
      element: electro,
    },
    {
      id: 4,
      name: 'Zhenyu',
      image: xingqiuAvatar,
      text: '非常好的食物. i love Liyue Food the most!! Liyue number one!!!',
      star: '4',
      element: hydro,
    },
    {
      id: 5,
      name: 'John Lee',
      image: zhongliAvatar,
      text: 'These Liyue food remind me of the good old day. 桂花酒的味道和记忆中的一样……但那些共同记忆的人在哪里？',
      star: '5',
      element: geo,
    },
  ];
  const menuList = [
    { id: 1, name: 'Mondstadt', link: '/menu#Mondstadt', size: 'mon', image: crispyPotatoShrimpPlatter },
    { id: 2, name: 'Liyue', link: '/menu#Liyue', size: 'li', image: riceBun },
    { id: 3, name: 'Inazuma', link: '/menu#Inazuma', size: '', image: tricolorDango },
    { id: 4, name: 'Sumeru', link: '/menu#Sumeru', size: '', image: yearning },
    { id: 5, name: 'Fontaine', link: '/menu#Fontaine', size: 'fon', image: seabirdsSojourn },
    { id: 6, name: 'Drink & Dessert', link: '/menu#DrinkDessert', size: '', image: appleCider },
  ];
  const handleFormSubmit = (values) => {
    console.log('Form Submit: ', values);
  };
  // const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // useEffect(() => {
  //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
  // }, []);

  const productTemplate = (review) => {
    return (
      <div className="carousel-item">
        <div className="review-avatar-container">
          <img
            size="xlarge"
            src={review.image}
            alt={review.name}
            className="review-avatar"
            style={{ borderColor: review.element }}
          />
        </div>
        <div className="review-description">
          <h4 className="review-name">{review.name}</h4>
          <p className="review-text">{review.text}</p>
          <div className="review-star">
            {review.star}
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    );
  };
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
                <img className="discover-image" src={restaurant1} alt="Restaurant4" />
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
        <ul className="menu-category-grid">
          {menuList.map((item) => {
            return (
              <li className={'menu-item ' + item.size} key={item.id}>
                <Link to={item.link} className="menu-link">
                  {/* <div className='menu'> */}
                  <img className="menu-image" src={item.image} alt="Menu" />
                  <div className="menu-name">
                    <h3>{item.name}</h3>
                    {/* </div> */}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="delivery-parallax">
          <div className="parallax-overlay">
            <h2 className="delivery-name">Komaniya Express Delivery</h2>
            <p className="delivery-p">
              Based on the famous delivery company from Inazuma, Genshin Impact. Komaniya Express will deliver food to
              your front door in no time!
            </p>
            <Link to="/menu/delivery">
              <Button className="delivery-btn" label="ORDER NOW" rounded />
            </Link>
          </div>
        </div>
      </section>
      <section className="reservation-container">
        <div className="reservation-form">
          <div className="reservation-text">
            <h3 className="reservation">Reservation</h3>
            <h2 className="book-table">BOOK TABLE</h2>
          </div>
          <InputForm onSubmit={handleFormSubmit}></InputForm>
        </div>
        <div className="body-welcome-image-container">
          <img className="body-welcome-image" src={restaurant4} alt="Charlottes Specialty" />
        </div>
      </section>
      <section className="review-container">
        <div className="review-title">
          <h3 className="customer">Customer Say</h3>
          <h2 className="review">Review</h2>
          <p className="review-p">Here we show a number of random selected reviews leave in our restaurant</p>
        </div>
        <div className="carousel-container">
          <Carousel
            value={reviewList}
            numVisible={1}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            // className="custom-carousel"
            circular
            autoplayInterval={10000}
            itemTemplate={productTemplate}
          />
        </div>
      </section>
      <section className="video-container">
        <div className="video-parallax">
          <div className="video-overlay">
            <h3 className="video-discover">Discover</h3>
            <h2 className="our-video">OUR VIDEO</h2>
            {/* <div className="card flex justify-content-center"> */}
            <Button
              className="video-button"
              rounded
              // size="large"
              icon="fa-solid fa-play"
              onClick={() => setVisible(true)}
            />
            <Dialog
              // header="Header"
              visible={visible}
              style={{ width: '100vw', height: '100vh' }}
              onHide={() => setVisible(false)}
              className="video-dialog"
            >
              <iframe
                className="video"
                title="Youtube player"
                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
                style={{ border: '0', width: '100%', height: '100%' }}
              ></iframe>
            </Dialog>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="news-container">
        <h3 className="latest-news">Latest News</h3>
        <h2 className="hoyofood-news">HOYOFOOD NEWS</h2>
        <ul className="news-flex-container">
          {newsList.map((item) => {
            return (
              <li className="news-item">
                <Link to={item.link}>
                  <div className="news-image-container">
                    <img className="news-image" src={item.image} alt={item.title} />
                  </div>
                </Link>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-p">{item.text}</p>
                <Link className="news-learn-more" to={item.link}>
                  <b>
                    LEARN MORE <i class="fa-solid fa-arrow-right"></i>
                  </b>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="sign-up-container">
        <h3 className="sign-up-title">Want to work at Teyvat's Restaurant?</h3>
        <SignUpForm className="sign-up-form" onSubmit={handleFormSubmit}></SignUpForm>
      </section>
    </div>
  );
}

export default Home;
