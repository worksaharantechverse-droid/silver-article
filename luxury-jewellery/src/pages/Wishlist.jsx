import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function Wishlist() {
  const { items, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Wishlist</h1>
          </div>
        </div>
        <div className="container">
          <div className="cart-empty">
            <div className="cart-empty__icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h2>Your Wishlist is Empty</h2>
            <p>Save your favourite silver pieces here for later.</p>
            <Link to="/shop" className="btn btn--primary">Explore Collection</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Wishlist</h1>
          <p className="page-header__desc">{items.length} {items.length === 1 ? 'item' : 'items'} saved</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="wishlist-toolbar">
            <button className="btn btn--outline" onClick={clearWishlist}>Clear Wishlist</button>
          </div>
          <div className="products-grid products-grid--4">
            {items.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-card__image-wrap">
                  <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
                  <span className="product-card__badge product-card__badge--handmade" style={{ position: 'absolute', top: '12px', left: '12px' }}>Handmade</span>
                </Link>
                <div className="product-card__info">
                  <Link to={`/product/${product.id}`} className="product-card__name">{product.name}</Link>
                  <div className="product-card__meta">
                    <span className="product-card__purity">{product.purity}</span>
                  </div>
                  <div className="product-card__price">
                    <span className="product-card__current-price">&#8377;{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="product-card__original-price">&#8377;{product.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                  <div className="product-card__wishlist-actions">
                    <button className="btn btn--primary btn--sm" onClick={() => { addToCart(product); toggleWishlist(product); }}>
                      Add to Cart
                    </button>
                    <button className="btn btn--outline btn--sm" onClick={() => toggleWishlist(product)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
