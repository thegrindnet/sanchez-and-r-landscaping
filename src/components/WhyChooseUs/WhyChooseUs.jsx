import "./WhyChooseUs.css";
import { reasons } from "../../utils/constants.js";
function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="section__inner">
        <p className="eyebrow">Why Sanchez and R</p>
        <div className="why__layout">
          <h2 className="display-title">
            Local experience.
            <br />
            Straightforward service.
          </h2>
          <div className="why__list">
            {reasons.map((reason) => (
              <article key={reason.title}>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;
