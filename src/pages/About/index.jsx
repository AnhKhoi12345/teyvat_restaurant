import { Button } from 'primereact/button';
import PropHeader from '../../component/PropHeader';
import './about.scss';
import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';
import charlotteSpecialty from '../../images/ExclusiveScoopGourmetColumn1.webp';
import staffApi from '../../api/staffApi';
import SignUpForm from '../Home/components/SignUpForm';
import recipie from '../../images//MasalaCheeseBall.webp';
import hoyo from '../../images//hoyoverse.jpg';
function About() {
  const [staff, setStaff] = useState(null);
  const [visible, setVisible] = useState(false);
  const [youtubeID] = useState('8BLjG4Cof1U');
  useEffect(() => {
    staffApi.getAll().then((data) => setStaff(data));
    window.scrollTo(0, 0);
  }, []);
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <PropHeader img="url(https://i.imgur.com/gYoXWFK.jpeg)  top no-repeat" title="ABOUT US" />
      <section className="about-us-container">
        <div className="our-story">
          <h3>Teyvatian Restaurant</h3>
          <h1>OUR STORY</h1>
          <p>
            Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in,
            luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut
            pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
          </p>
        </div>

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
        <div className="recipies-container">
          <div className="recipies-text">
            <h3 className="recipies-h3">Delicious</h3>
            <h2 className="recipies-h2">RECIPIES</h2>
            <p className="recipies-p">
              With many great Chefs that our company was able to gathered, many wonderful dishes from Genshin Impact has
              been created succcessfully in real life
            </p>
          </div>
          <div className="recipies-image-container">
            <img className="recipies-image" src={recipie} alt="Charlottes Specialty" />
          </div>
        </div>
        <div className="restaurant-container" id="history">
          <div className="restaurant-image-container">
            <img className="restaurant-image" src={hoyo} alt="Charlottes Specialty" />
          </div>
          <div className="restaurant-text">
            <h3 className="restaurant-h3">History</h3>
            <h2 className="restaurant-h2">RESTAURANT</h2>
            <p className="restaurant-p">
              With the great success of Genshin impact, Da wei was wondered if we can provide diffrerent service using
              the theme of Genshin Impact. Thus HoyoFood was found in 2024 to open up and manage restaurant of Teyvat
              Food.
            </p>
          </div>
        </div>
      </section>
      <section className="about-staff-container">
        <div className="staff-parallax">
          <div className="parallax-overlay"></div>
        </div>
        <h2>Meet Our</h2>
        <h1>STAFF</h1>
        <div className="staff-grid">
          {staff &&
            staff.map((item, index) => {
              let staffItem = (
                <>
                  <div className="staff-image-container">
                    <img
                      className="staff-image"
                      src={`http://localhost:3001/uploads/${item.image}`}
                      alt=""
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="staff-info">
                    <h3>{item.name}</h3>
                    <p className="staff-job">{item.job}</p>
                    <p className="staff-intro">{item.introduction}</p>
                  </div>
                </>
              );
              return (
                <div className="staff-item" key={index}>
                  {staffItem}
                </div>
              );
            })}
        </div>
      </section>
      <section className="sign-up-container">
        <h3 className="sign-up-title">Want to contact us?</h3>
        <SignUpForm className="sign-up-form" onSubmit={handleFormSubmit}></SignUpForm>
      </section>
    </div>
  );
}

export default About;
