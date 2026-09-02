import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(p => p.categories.includes(selectedCategory));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.purity.toLowerCase().includes(q) ||
        p.categories.some(c => c.toLowerCase().includes(q))
      );
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat) {
      searchParams.set('category', cat);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="shop-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Shop Silver Articles</h1>
          <p className="page-header__desc">Discover our collection of handcrafted silver jewellery and traditional articles</p>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          <aside className="shop-sidebar">
            <div className="shop-sidebar__section">
              <h3>Search</h3>
              <input
                type="text"
                placeholder="Search silver articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="shop-search-input"
              />
            </div>

            <div className="shop-sidebar__section">
              <h3>Categories</h3>
              <button
                className={`shop-sidebar__cat-btn ${selectedCategory === '' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('')}
              >
                All Products
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`shop-sidebar__cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="shop-sidebar__section">
              <h3>Price Range</h3>
              <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className="shop-select">
                <option value="all">All Prices</option>
                <option value="0-2000">Under &#8377;2,000</option>
                <option value="2000-5000">&#8377;2,000 - &#8377;5,000</option>
                <option value="5000-10000">&#8377;5,000 - &#8377;10,000</option>
                <option value="10000-999999999">Above &#8377;10,000</option>
              </select>
            </div>
          </aside>

          <main className="shop-main">
            <div className="shop-toolbar">
              <p className="shop-toolbar__count">{filteredProducts.length} products</p>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="shop-select">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="shop-empty">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms.</p>
                <Link to="/shop" className="btn btn--primary" style={{ marginTop: '16px', display: 'inline-block' }}>Clear Filters</Link>
              </div>
            ) : (
              <div className="products-grid products-grid--3">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
