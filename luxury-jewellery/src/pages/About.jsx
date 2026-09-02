import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">About SILVERARTICLE</h1>
          <p className="page-header__desc">A legacy of Indian silversmith artistry</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__image-wrap">
              <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop" alt="Master silversmith at work" />
            </div>
            <div className="about-story__content">
              <span className="section__subtitle">Our Beginning</span>
              <h2 className="section__title section__title--left">Rooted in Tradition</h2>
              <p>SILVERARTICLE was founded with a singular mission: to preserve and celebrate the extraordinary art of Indian silversmithing. What began as a small workshop has grown into a trusted name for premium handcrafted silver articles and jewellery.</p>
              <p>Our family of artisans brings centuries-old techniques to every piece. From the bazaars of Jaipur to homes across India and beyond, our silver speaks the language of heritage, devotion, and timeless beauty.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card__icon">&#9670;</div>
              <h3>925 Sterling Silver</h3>
              <p>Every piece is made from genuine 925 sterling silver, hallmarked and certified for purity. We never compromise on material quality.</p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">&#9733;</div>
              <h3>Handcrafted Heritage</h3>
              <p>Our master silversmiths use traditional Indian techniques — hand-chasing, repousse, lost-wax casting, and filigree — passed down through generations.</p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">&#9829;</div>
              <h3>Sacred &amp; Daily Use</h3>
              <p>From pooja articles and divine idols to everyday jewellery and utensils, we create silver for every aspect of your life.</p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">&#9830;</div>
              <h3>Bespoke Creations</h3>
              <p>Have a vision? We craft custom silver articles tailored to your exact specifications. Your imagination, our silver.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story about-story--reverse">
            <div className="about-story__content">
              <span className="section__subtitle">Our Craft</span>
              <h2 className="section__title section__title--left">From Raw Silver to Masterpiece</h2>
              <p>Every SILVERARTICLE creation begins with a lump of pure silver and a vision. Our artisans hand-forge, cast, chase, and polish each piece through a meticulous multi-step process.</p>
              <p>A single pooja thali may take a week to complete. A bridal set, over a month. We believe that true craftsmanship cannot be rushed — it must be felt in every curve and contour of the finished piece.</p>
              <Link to="/shop" className="btn btn--primary">Explore Our Collection</Link>
            </div>
            <div className="about-story__image-wrap">
              <img src="https://images.unsplash.com/photo-1515562141589-67f0d727b750?w=800&h=600&fit=crop" alt="Silver crafting process" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section__subtitle section__subtitle--light">By The Numbers</span>
          <h2 className="section__title section__title--light">Our Legacy</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-item__number">30+</span>
              <span className="stat-item__label">Years of Craft</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">10,000+</span>
              <span className="stat-item__label">Pieces Created</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">50+</span>
              <span className="stat-item__label">Artisans</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">100%</span>
              <span className="stat-item__label">Certified Silver</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
