import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const testimonials = [
  { name: 'Priya Menon', location: 'Mumbai', text: 'The bridal silver set I ordered was beyond my expectations. The craftsmanship is extraordinary — every detail was perfect. SILVERARTICLE made my wedding truly special.', rating: 5 },
  { name: 'Anjali Sharma', location: 'Delhi', text: 'I have been buying silver pooja articles from SILVERARTICLE for years. The quality and purity are always top-notch. Their Lakshmi idols are my favourite.', rating: 5 },
  { name: 'Rajesh Kumar', location: 'Jaipur', text: 'Ordered a custom silver kada as a wedding gift. The team was incredibly patient with the design process. The finished piece was stunning and the recipient loved it.', rating: 5 },
  { name: 'Meera Iyer', location: 'Chennai', text: 'The silver anklets are beautiful and so comfortable to wear. I wear them every day. The ghungroo sound is gentle and melodious. Highly recommend!', rating: 5 },
  { name: 'Sunita Reddy', location: 'Hyderabad', text: 'I bought the silver thali set for my daughter\'s wedding. It was beautifully crafted and arrived in perfect packaging. Worth every rupee.', rating: 5 },
  { name: 'Deepak Joshi', location: 'Udaipur', text: 'The silver coins I ordered for Diwali gifting were excellent. Premium quality and came in beautiful boxes. All my relatives were impressed.', rating: 5 },
];

const whyChooseUs = [
  { icon: '&#9670;', title: '925 Sterling Silver', desc: 'All our jewellery is crafted from genuine 925 sterling silver, hallmarked for your assurance.' },
  { icon: '&#9733;', title: 'Handcrafted Artistry', desc: 'Every piece is made by skilled Indian silversmiths using techniques passed down through generations.' },
  { icon: '&#9829;', title: 'Custom Designs', desc: 'We create bespoke silver articles tailored to your vision. Share your idea and we will bring it to life.' },
  { icon: '&#9830;', title: 'Certified Purity', desc: 'Each item comes with a purity certificate. We stand behind the quality of every gram of silver we sell.' },
];

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const featuredJewellery = products.filter(p => p.categories.some(c => ['silver-jewellery', 'silver-earrings', 'silver-bracelets', 'silver-chains', 'silver-necklaces'].includes(c))).slice(0, 4);
  const bridalCollection = products.filter(p => p.categories.includes('bridal-silver')).slice(0, 3);
  const traditionalArticles = products.filter(p => p.categories.some(c => ['silver-pooja', 'silver-utensils', 'silver-bowls-spoons', 'silver-coins'].includes(c))).slice(0, 4);
  const spiritualCollection = products.filter(p => p.categories.some(c => ['silver-pooja', 'silver-idols'].includes(c))).slice(0, 4);
  const giftItems = products.filter(p => p.categories.includes('silver-gifts')).slice(0, 4);
  const bestSellers = products.filter(p => p.badge === 'bestseller').slice(0, 4);
  const customItems = products.filter(p => p.categories.includes('custom-silver'));
  const topCategories = categories.slice(0, 10);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      alert('Thank you for subscribing to SILVERARTICLE updates!');
      setNewsletterEmail('');
    }
  };

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop" alt="" />
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <span className="hero__subtitle">Since Generations</span>
          <h1 className="hero__title">
            <span className="hero__brand">SILVERARTICLE</span>
            <span className="hero__tagline">Timeless Silver. Indian Craftsmanship.</span>
          </h1>
          <p className="hero__desc">Handcrafted silver jewellery and traditional silver articles, made with artistry, heritage and attention to detail.</p>
          <div className="hero__actions">
            <Link to="/shop" className="btn btn--primary">Shop Collection</Link>
            <Link to="/contact" className="btn btn--outline-light">Custom Order</Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee__inner">
          <span>&#9670; 925 Hallmarked Sterling Silver</span>
          <span>&#9670; Handcrafted by Master Silversmiths</span>
          <span>&#9670; Free Shipping on Orders Above &#8377;5,000</span>
          <span>&#9670; Purity Certificate with Every Order</span>
          <span>&#9670; Custom Silver Articles Available</span>
          <span>&#9670; 925 Hallmarked Sterling Silver</span>
          <span>&#9670; Handcrafted by Master Silversmiths</span>
          <span>&#9670; Free Shipping on Orders Above &#8377;5,000</span>
          <span>&#9670; Purity Certificate with Every Order</span>
          <span>&#9670; Custom Silver Articles Available</span>
        </div>
      </div>

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Explore</span>
            <h2 className="section__title">Shop by Category</h2>
          </div>
          <div className="category-grid category-grid--5">
            {topCategories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Silver Jewellery */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Handcrafted Elegance</span>
            <h2 className="section__title">Featured Silver Jewellery</h2>
          </div>
          <div className="products-grid products-grid--4">
            {featuredJewellery.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section__cta">
            <Link to="/shop?category=silver-jewellery" className="btn btn--primary">View All Jewellery</Link>
          </div>
        </div>
      </section>

      {/* Bridal Collection */}
      {bridalCollection.length > 0 && (
        <section className="section section--dark">
          <div className="container">
            <div className="section__header section__header--light">
              <span className="section__subtitle section__subtitle--light">For the Sacred Ceremony</span>
              <h2 className="section__title section__title--light">Bridal Silver Collection</h2>
            </div>
            <div className="products-grid products-grid--3">
              {bridalCollection.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="section__cta">
              <Link to="/shop?category=bridal-silver" className="btn btn--silver">Explore Bridal Collection</Link>
            </div>
          </div>
        </section>
      )}

      {/* Traditional Silver Articles */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Heritage &amp; Ritual</span>
            <h2 className="section__title">Traditional Silver Articles</h2>
          </div>
          <div className="products-grid products-grid--4">
            {traditionalArticles.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section__cta">
            <Link to="/shop?category=silver-utensils" className="btn btn--primary">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* Spiritual Collection */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Divine Craftsmanship</span>
            <h2 className="section__title">Spiritual Collection</h2>
          </div>
          <div className="products-grid products-grid--4">
            {spiritualCollection.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section__cta">
            <Link to="/shop?category=silver-pooja" className="btn btn--primary">View Spiritual Articles</Link>
          </div>
        </div>
      </section>

      {/* Silver Gifts */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Meaningful Gifting</span>
            <h2 className="section__title">Silver Gifts</h2>
          </div>
          <div className="products-grid products-grid--4">
            {giftItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section__cta">
            <Link to="/shop?category=silver-gifts" className="btn btn--primary">View Gift Collection</Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Customer Favourites</span>
            <h2 className="section__title">Best Sellers</h2>
          </div>
          <div className="products-grid products-grid--4">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Made Silver */}
      <section className="section section--dark">
        <div className="container">
          <div className="custom-banner">
            <div className="custom-banner__content">
              <span className="section__subtitle section__subtitle--light">Your Vision, Our Craft</span>
              <h2 className="section__title section__title--light">Custom Made Silver</h2>
              <p className="custom-banner__desc">Have a design in mind? Our master silversmiths can bring any silver article to life. From custom jewellery to pooja items, idols, and gift pieces — we craft it all by hand.</p>
              <div className="custom-banner__actions">
                <Link to="/contact" className="btn btn--silver">Get a Custom Quote</Link>
                <Link to="/shop?category=custom-silver" className="btn btn--outline-light">View Custom Pieces</Link>
              </div>
            </div>
            {customItems.length > 0 && (
              <div className="custom-banner__image">
                <img src={customItems[0].image} alt="Custom silver article" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About SilverArticle */}
      <section className="section">
        <div className="container">
          <div className="about-brand__grid">
            <div className="about-brand__image-wrap">
              <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop" alt="Silver artisan at work" className="about-brand__image" />
            </div>
            <div className="about-brand__content">
              <span className="section__subtitle">Our Story</span>
              <h2 className="section__title section__title--left">The Art of Silver</h2>
              <p>SILVERARTICLE was born from a deep reverence for Indian silversmith traditions. For generations, our family has dedicated itself to transforming raw silver into objects of beauty, devotion, and daily use.</p>
              <p>Every piece that leaves our workshop carries the fingerprint of a master craftsman. We do not mass-produce — we create. Each silver article is a unique expression of India&apos;s rich artistic heritage, crafted with patience and precision.</p>
              <Link to="/about" className="btn btn--primary">Discover Our Heritage</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Our Promise</span>
            <h2 className="section__title">Why Choose SILVERARTICLE</h2>
          </div>
          <div className="values-grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__subtitle">Happy Customers</span>
            <h2 className="section__title">What People Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j}>&#9733;</span>
                  ))}
                </div>
                <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter + Contact */}
      <section className="section section--dark">
        <div className="container">
          <div className="newsletter-contact">
            <div className="newsletter__content">
              <span className="section__subtitle section__subtitle--light">Stay Connected</span>
              <h2 className="section__title section__title--light">Join the SILVERARTICLE Family</h2>
              <p className="newsletter__desc">Get updates on new arrivals, exclusive offers, and handcrafted silver inspiration.</p>
              <form className="newsletter__form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn--silver">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
