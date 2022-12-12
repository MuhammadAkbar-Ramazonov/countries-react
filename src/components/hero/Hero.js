import "./hero.css";
import Algeria from "../../assets/images/Algeria.jpg";

function Hero () {
    return (
        <>
        <li className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center mb-5 hero-section-item">
              <a className="hero-section-item-link" href="">
                <img className="hero-section-item-img" 
                src={Algeria} 
                alt="" />
                <div className="card-body p-3">
                  <h3 className="hero-section-item-wrapper-title mb-3">Algeria</h3>
                  <span className="hero-section-item-wrapper-inner d-flex mb-2">
                    <strong className="hero-section-item-wrapper-inner-title">Population:</strong>
                    <p className="hero-section-item-wrapper-inner-discrip">40,400,000</p>
                  </span>
                  <span className="hero-section-item-wrapper-inner d-flex mb-2">
                    <strong className="hero-section-item-wrapper-inner-title">Region:</strong>
                    <p className="hero-section-item-wrapper-inner-discrip">Africa</p>
                  </span>
                  <span className="hero-section-item-wrapper-inner d-flex mb-2">
                    <strong className="hero-section-item-wrapper-inner-title">Capital:</strong>
                    <p className="hero-section-item-wrapper-inner-discrip">Algiers</p>
                  </span>
                </div>
              </a>
        </li>
        </>
    )
}

export default Hero;