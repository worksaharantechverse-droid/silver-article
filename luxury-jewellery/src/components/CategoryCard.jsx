import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/shop?category=${category.id}`} className="category-card">
      <div className="category-card__image-wrap">
        <img src={category.image} alt={category.name} className="category-card__image" loading="lazy" />
        <div className="category-card__overlay"></div>
      </div>
      <div className="category-card__content">
        <h3 className="category-card__name">{category.name}</h3>
        <p className="category-card__desc">{category.description}</p>
        <span className="category-card__link">Explore &rarr;</span>
      </div>
    </Link>
  );
}
