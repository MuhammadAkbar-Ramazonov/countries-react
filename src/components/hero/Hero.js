import "./hero.css";
import Germany from "../../assets/images/Germany.jpg";

function Hero () {
    return (
        <>
        <li className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center mb-5 hero-section-item">
            <img src={Germany} alt=""/>
              <a className="hero-section-item-link" href="">
                <img className="hero-section-item-img" 
                src={Germany} 
                alt="" />
                <div className="card-body p-3">
                  <h3 className="hero-section-item-wrapper-title mb-3">Germany</h3>
                  <span className="hero-section-item-wrapper-inner d-flex mb-2">
                    <strong className="hero-section-item-wrapper-inner-title">Population:</strong>
                    <p className="hero-section-item-wrapper-inner-discrip">81,770,900</p>
                  </span>
                  <span className="hero-section-item-wrapper-inner d-flex mb-2">
                    <strong className="hero-section-item-wrapper-inner-title">Region:</strong>
                    <p className="hero-section-item-wrapper-inner-discrip">Europe</p>
                  </span>
                  <span className="hero-section-item-wrapper-inner d-flex mb-2">
                    <strong className="hero-section-item-wrapper-inner-title">Capital:</strong>
                    <p className="hero-section-item-wrapper-inner-discrip">Berlin</p>
                  </span>
                </div>
              </a>
        </li>
        </>
    )
}

export default Hero;