import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [customNote, setCustomNote] = useState('');

  if (!product) {
    return (
      <div className="container" style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn--primary" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Shop</Link>
      </div>
    );
  }

  const wishlisted = isInWishlist(product.id);
  const related = products.filter(p =>
    p.id !== product.id && p.categories.some(c => product.categories.includes(c))
  ).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-details-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
        </nav>

        <div className="product-details">
          <div className="product-details__gallery">
            <div className="product-details__main-image">
              <img src={product.images[activeImage]} alt={product.name} />
              <span className="product-card__badge product-card__badge--handmade" style={{ position: 'absolute', top: '16px', left: '16px' }}>Handmade</span>
            </div>
            <div className="product-details__thumbs">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`product-details__thumb ${i === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="product-details__info">
            {product.badge && (
              <span className={`product-card__badge product-card__badge--${product.badge}`} style={{ position: 'static', marginBottom: '12px', display: 'inline-block' }}>
                {product.badge === 'bestseller' ? 'Best Seller' : product.badge === 'new' ? 'New Arrival' : product.badge === 'bridal' ? 'Bridal' : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
              </span>
            )}
            <h1 className="product-details__name">{product.name}</h1>

            <div className="product-details__price">
              <span className="product-details__current-price">&#8377;{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="product-details__original-price">&#8377;{product.originalPrice.toLocaleString('en-IN')}</span>
              )}
            </div>

            <div className="product-details__specs">
              <div className="product-details__spec"><strong>Silver Purity:</strong> {product.purity}</div>
              <div className="product-details__spec"><strong>Approximate Weight:</strong> {product.weight}</div>
              <div className="product-details__spec"><strong>Dimensions:</strong> {product.dimensions}</div>
              <div className="product-details__spec"><strong>Availability:</strong> {product.inStock ? 'In Stock' : 'Made to Order'}</div>
            </div>

            <p className="product-details__desc">{product.description}</p>

            <div className="product-details__craftsmanship">
              <h4>Craftsmanship</h4>
              <p>{product.craftsmanship}</p>
            </div>

            {product.customisation && (
              <div className="product-details__customisation">
                <h4>Customisation Options</h4>
                <p>{product.customisation}</p>
                <textarea
                  className="product-details__custom-input"
                  placeholder="Add your customisation notes here..."
                  value={customNote}
                  onChange={e => setCustomNote(e.target.value)}
                  rows="3"
                />
              </div>
            )}

            <div className="product-details__actions">
              <div className="product-details__quantity">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <button className="btn btn--primary btn--lg" onClick={handleAddToCart}>
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                className={`btn btn--outline btn--lg ${wishlisted ? 'btn--wishlisted' : ''}`}
                onClick={() => toggleWishlist(product)}
              >
                {wishlisted ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            <WhatsAppButton product={product} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="section">
            <div className="section__header">
              <span className="section__subtitle">You May Also Like</span>
              <h2 className="section__title">Related Products</h2>
            </div>
            <div className="products-grid products-grid--4">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
