import "./Hero.css";
import "./HeroEpic.css";
import heroImage from "../../assets/images/hero-image.png";
import { business } from "../../utils/constants.js";
function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero__image"
        src={heroImage}
        alt="Completed residential landscape with a broad green lawn, mature tree, and clean edging"
      />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="hero__kicker">Landscaping built around your life</p>
        <h1>Turn your yard into the best part of home.</h1>
        <p className="hero__intro">
          Complete landscaping, turf, hardscape, and lawn care for properties
          across the El Paso, Chaparral, and Las Cruces region.
        </p>
        <div className="hero__actions">
          <a className="button button--yellow" href={business.phoneHref}>
            Get a free estimate
          </a>
          <a className="button hero__projects" href="#projects">
            Explore our work <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="hero__note">
          Front yards · Backyards · Low-maintenance landscapes
        </p>
      </div>
      <div
        className="hero__experience"
        aria-label="25 years of landscaping experience"
      >
        <strong>25</strong>
        <span>
          Years of
          <br />
          experience
        </span>
      </div>
      <div className="hero__side">
        <span>From first cut to full transformation</span>
        <strong>
          Built for the outdoors.
          <br />
          Made for your life.
        </strong>
      </div>
    </section>
  );
}
export default Hero;
