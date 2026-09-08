import "./About.css";
import aboutImage from "../../assets/images/turf-3.png";
import { business } from "../../utils/constants.js";
function About() {
  return (
    <section className="about section" id="about">
      <div className="section__inner about__layout">
        <div className="about__image-wrap">
          <img
            src={aboutImage}
            alt="Finished artificial turf yard bordered by a stone wall"
            loading="lazy"
          />
          <span>
            <strong>25</strong> years of experience
          </span>
        </div>
        <div className="about__content">
          <p className="eyebrow">About us</p>
          <h2 className="display-title">
            From regular care to a complete outdoor transformation.
          </h2>
          <p>
            Sanchez and R Landscaping provides dependable, high-quality
            landscaping services backed by 25 years of experience. We take pride
            in creating beautiful, functional spaces that our customers can
            enjoy.
          </p>
          <p>
            Our team handles the full range of outdoor needs—from mowing,
            cleanup, and sprinkler repair to turf, flagstone, gravel, concrete,
            and complete front and backyard designs.
          </p>
          <a className="button button--outline" href={business.phoneHref}>
            Call for a free estimate
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
