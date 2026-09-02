import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <span className="footer__logo-diamond">&#9670;</span>
                <span className="footer__logo-text">SILVERARTICLE</span>
              </Link>
              <p className="footer__tagline">Handcrafted Indian silver jewellery and traditional silver articles. Preserving centuries of silversmith artistry with every piece we create.</p>
              <div className="footer__social">
                <a href="#" aria-label="Instagram" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" aria-label="Pinterest" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12a4 4 0 1 1 8 0c0 4-2 8-4 8"/><path d="M9 17l2 4"/><circle cx="12" cy="12" r="10"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
              </div>
            </div>

            <div className="footer__links-group">
              <h4>Quick Links</h4>
              <Link to="/shop">Shop All</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer__links-group">
              <h4>Popular Categories</h4>
              <Link to="/shop?category=anklets-payal">Anklets / Payal</Link>
              <Link to="/shop?category=silver-pooja">Pooja Articles</Link>
              <Link to="/shop?category=silver-idols">Silver Idols</Link>
              <Link to="/shop?category=silver-gifts">Silver Gifts</Link>
            </div>

            <div className="footer__links-group">
              <h4>Contact Us</h4>
              <p>SilverArticle Workshop</p>
              <p>Jaipur, Rajasthan, India</p>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <a href="mailto:info@silverarticle.com">info@silverarticle.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <p>&copy; 2026 SILVERARTICLE. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
