import "./ServiceArea.css";
import areaImage from "../../assets/images/Screenshot_20260904-125123_WhatsApp.webp";
import { business } from "../../utils/constants.js";
function ServiceArea() {
  return (
    <section className="area">
      <div className="area__image">
        <img
          src={areaImage}
          alt="Completed landscape with turf, gravel and concrete steps"
          loading="lazy"
        />
      </div>
      <div className="area__content">
        <p className="eyebrow">Where we work</p>
        <h2>Landscaping across the borderland.</h2>
        <p>
          Serving homes and properties throughout the El Paso, TX and Chaparral,
          NM. Call with your location and we’ll confirm service availability.
        </p>
        <div className="area__places">
          <span>El Paso</span>
          <span>Chaparral</span>
        </div>
        <a className="button button--yellow" href={business.phoneHref}>
          Check your service area
        </a>
      </div>
    </section>
  );
}
export default ServiceArea;
