import "./Services.css";
import { serviceGroups } from "../../utils/constants.js";
function Services() {
  return (
    <section className="services section" id="services">
      <div className="section__inner">
        <div className="services__intro">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="display-title">
              Everything your outdoor space needs.
            </h2>
          </div>
          <p>
            From routine maintenance to complete transformations, we bring
            together lawn care, landscape installation, and hardscape work for a
            finished space that feels intentional.
          </p>
        </div>
        <div className="services__grid">
          {serviceGroups.map((group) => (
            <article className="service" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
