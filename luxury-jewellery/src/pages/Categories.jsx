import { categories } from '../data/categories';
import { products } from '../data/products';
import CategoryCard from '../components/CategoryCard';

export default function Categories() {
  return (
    <div className="categories-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Collections</h1>
          <p className="page-header__desc">Explore our handcrafted silver categories — from jewellery to pooja articles, gifts to custom creations</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="category-grid category-grid--5">
            {categories.map(cat => {
              const count = products.filter(p => p.categories.includes(cat.id)).length;
              return (
                <div key={cat.id} className="category-page-card">
                  <CategoryCard category={cat} />
                  <p className="category-page-card__count">{count} {count === 1 ? 'product' : 'products'}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
