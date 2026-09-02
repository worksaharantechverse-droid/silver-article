import { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_WISHLIST': {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'CLEAR_WISHLIST':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] }, () => {
    const saved = localStorage.getItem('silverarticle-wishlist');
    return saved ? JSON.parse(saved) : { items: [] };
  });

  useEffect(() => {
    localStorage.setItem('silverarticle-wishlist', JSON.stringify(state));
  }, [state]);

  const toggleWishlist = (product) => dispatch({ type: 'TOGGLE_WISHLIST', payload: product });
  const clearWishlist = () => dispatch({ type: 'CLEAR_WISHLIST' });
  const isInWishlist = (id) => state.items.some(item => item.id === id);

  return (
    <WishlistContext.Provider value={{ ...state, toggleWishlist, clearWishlist, isInWishlist, wishlistCount: state.items.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
}
