import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Shopping Cart</h1>
          </div>
        </div>
        <div className="container">
          <div className="cart-empty">
            <div className="cart-empty__icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Explore our collection of handcrafted silver articles and find something you love.</p>
            <Link to="/shop" className="btn btn--primary">Start Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Shopping Cart</h1>
          <p className="page-header__desc">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="cart-layout">
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`} className="cart-item__image">
                    <img src={item.image} alt={item.name} />
                  </Link>
                  <div className="cart-item__details">
                    <Link to={`/product/${item.id}`} className="cart-item__name">{item.name}</Link>
                    <p className="cart-item__material">{item.purity} &middot; {item.weight}</p>
                    <div className="cart-item__price">&#8377;{item.price.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="cart-item__quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="cart-item__total">&#8377;{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                  <button className="cart-item__remove" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>&#8377;{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="cart-summary__row">
                <span>Shipping</span>
                <span>{cartTotal >= 5000 ? 'Free' : '&#8377;99'}</span>
              </div>
              <div className="cart-summary__divider"></div>
              <div className="cart-summary__row cart-summary__total">
                <span>Total</span>
                <span>&#8377;{(cartTotal + (cartTotal >= 5000 ? 0 : 99)).toLocaleString('en-IN')}</span>
              </div>
              <button className="btn btn--primary btn--lg btn--full">Proceed to Checkout</button>
              <button className="btn btn--outline btn--full" style={{ marginTop: '12px' }} onClick={clearCart}>Clear Cart</button>
              <div style={{ marginTop: '16px' }}>
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
