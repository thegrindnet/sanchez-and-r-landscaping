import "./Footer.css";
import logo from "../../assets/images/sanchez-r-landscaping-logo.png";
import { business, navItems } from "../../utils/constants.js";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a
          className="footer__brand"
          href="#home"
          aria-label={`${business.name} home`}
        >
          <img src={logo} alt="Sanchez and R Landscaping" />
        </a>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={business.instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </span>
        <span>{business.serviceArea}</span>
      </div>
    </footer>
  );
}
export default Footer;
