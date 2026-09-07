import "./Process.css";
import { processSteps, business } from "../../utils/constants.js";
function Process() {
  return (
    <section className="process section">
      <div className="section__inner">
        <p className="eyebrow">Easy scheduling</p>
        <div className="process__heading">
          <h2 className="display-title">A simpler way to improve your yard.</h2>
          <a className="button button--yellow" href={business.phoneHref}>
            Call for a Free Estimate
          </a>
        </div>
        <ol>
          {processSteps.map((step) => (
            <li key={step.number}>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export default Process;
