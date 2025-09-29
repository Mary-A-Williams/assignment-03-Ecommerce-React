import React from 'react';


export default function Sidebar({ filters, setFilters }) {
  const handleCategoryChange = (category) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category];
    setFilters({ ...filters, category: newCategories });
  };

  const handlePriceChange = (range) => {
    const newPrice = filters.priceRange.includes(range)
      ? filters.priceRange.filter(p => p !== range)
      : [...filters.priceRange, range];
    setFilters({ ...filters, priceRange: newPrice });
  };

  return (
    <div className="filters">
      <h3>Photography <span>/ Premium Photos</span></h3>
      <div className="category">
        <h4>Category</h4>
        {['People','Premium','Pets','Food','Landmarks','Cities','Nature'].map(cat => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="price">
        <h4>Price range</h4>
        {[' Lower than $20','$20-$100','$100-$200','More than $200'].map(range => (
          <label key={range}>
            <input
              type="checkbox"
              checked={filters.priceRange.includes(range)}
              onChange={() => handlePriceChange(range)}
            />
            {range}
          </label>
        ))}
      </div>
    </div>
  );
}
