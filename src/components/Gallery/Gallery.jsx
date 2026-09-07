import "./Gallery.css";
import { galleryItems } from "../../utils/constants.js";
function Gallery() {
  return (
    <section className="gallery section" id="projects">
      <div className="section__inner">
        <div className="gallery__heading">
          <div>
            <p className="eyebrow">Recent work</p>
            <h2 className="display-title">Proof in every finished yard.</h2>
          </div>
          <p>
            Real outdoor improvements completed by Sanchez and R Landscaping.
          </p>
        </div>
        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <figure
              className={`gallery__item gallery__item--${index + 1}`}
              key={item.src}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading={index > 2 ? "lazy" : "eager"}
              />
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery;
