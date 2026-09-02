import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  const badgeLabel = {
    bestseller: 'Best Seller',
    new: 'New Arrival',
    premium: 'Premium',
    bridal: 'Bridal',
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
        <div className="product-card__badges">
          {product.badge && (
            <span className={`product-card__badge product-card__badge--${product.badge}`}>
              {badgeLabel[product.badge] || product.badge}
            </span>
          )}
          <span className="product-card__badge product-card__badge--handmade">Handmade</span>
        </div>
        <button
          className={`product-card__wishlist ${wishlisted ? 'product-card__wishlist--active' : ''}`}
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          aria-label="Add to wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </Link>
      <div className="product-card__info">
        <Link to={`/product/${product.id}`} className="product-card__name">{product.name}</Link>
        <div className="product-card__meta">
          <span className="product-card__purity">{product.purity}</span>
          <span className="product-card__weight">{product.weight}</span>
        </div>
        <div className="product-card__price">
          <span className="product-card__current-price">&#8377;{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="product-card__original-price">&#8377;{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
        <div className="product-card__rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < Math.floor(product.rating || 4.5) ? 'star--filled' : ''}`}>&#9733;</span>
          ))}
        </div>
        <div className="product-card__actions">
          <Link to={`/product/${product.id}`} className="product-card__view-btn">View Details</Link>
          <button className="product-card__add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
