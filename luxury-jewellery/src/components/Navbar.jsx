import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/categories', label: 'Categories' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className={`navbar__hamburger ${isOpen ? 'open' : ''}`}>
            <span></span><span></span><span></span>
          </span>
        </button>

        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-diamond">&#9670;</span>
          <span className="navbar__logo-text">SILVERARTICLE</span>
        </Link>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="navbar__action-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <Link to="/wishlist" className="navbar__action-btn" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            {wishlistCount > 0 && <span className="navbar__badge">{wishlistCount}</span>}
          </Link>
          <Link to="/cart" className="navbar__action-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="navbar__search-overlay" onClick={() => setSearchOpen(false)}>
          <form className="navbar__search" onClick={e => e.stopPropagation()} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search silver articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Search</button>
            <button type="button" className="navbar__search-close" onClick={() => setSearchOpen(false)}>&times;</button>
          </form>
        </div>
      )}
    </header>
  );
}
