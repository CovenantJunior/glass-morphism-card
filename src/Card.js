import './Card.css';
import clip from './assets/clip.png';
import indicator from './assets/indicator.png';
import logo from './assets/logo.png';

function Card() {
  return (
    <div className="card">
      <h3 className="bank">bank</h3>
      <img
        src={clip}
        alt="BIN Checker, Clip, Mastercard, VISA"
        className="clip"
      />
      <img
        src={indicator}
        alt="BIN Checker, Indicator, Mastercard, VISA"
        className="indicator"
      />
      <h3 className="number">5896 3456 0572 3698</h3>
      <h5 className="card-holder">
        <span>card holder</span>
        <br />
        Covenant T. Junior
      </h5>
      <h5 className="valid">
        <span>expiry date</span>
        <br />
        01/27
      </h5>
      <img
        src={logo}
        alt="BIN Checker, Logo, Mastercard, VISA"
        className="logo"
      />
    </div>
  );
}

export default Card;
