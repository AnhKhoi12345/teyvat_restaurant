import './footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-flex">
        <div className="footer-item footer-item-1">
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <p>
              <i class="fa-solid fa-location-dot"></i> 220M Liyue Main Street
            </p>
          </div>
          <div className="footer-time"></div>
        </div>
        <div className="footer-item footer-item-2"></div>
        <div className="footer-item footer-item-3"></div>
      </div>
      <div className="footer-end"></div>
    </div>
  );
}

export default Footer;
