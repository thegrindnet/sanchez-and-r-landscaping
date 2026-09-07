import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import logo from "../../assets/images/sanchez-r-landscaping-logo.png";
import { business } from "../../utils/constants.js";
function Header() {
  return (
    <header className="header">
      <div className="header__utility">
        <div className="header__utility-inner">
          <span>Serving {business.serviceArea}</span>
          <div>
            <span>Mon–Fri 8AM–5PM</span>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </div>
        </div>
      </div>
      <div className="header__main">
        <a
          className="header__brand"
          href="#home"
          aria-label={`${business.name} home`}
        >
          <img src={logo} alt="Sanchez and R Landscaping" />
        </a>
        <Navigation />
        <a
          className="header__call button button--yellow"
          href={business.phoneHref}
        >
          Call for a free estimate
        </a>
      </div>
    </header>
  );
}
export default Header;
