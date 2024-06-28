import React, { useState } from 'react';
import "./CategoryDropdown.css";
import { CategoriesData } from './CategoriesData';

const CategoryDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleCategoryMouseEnter = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(null);
  };

  const handleSubcategoryMouseEnter = (subcategoryId) => {
    setActiveSubcategory(subcategoryId);
  };

  const showSubcategories = (subCategories) => {
    return (
      <div className="subcategories-list">
        {subCategories.map((subCategory) => (
          <div
            key={subCategory.id}
            className="subcategory"
            onMouseEnter={() => handleSubcategoryMouseEnter(subCategory.id)}
            onMouseLeave={() => setActiveSubcategory(null)}
          >
            <span className="subcategory-name">
              {subCategory.name}
            </span>
            
            {subCategory.subcategories && activeSubcategory === subCategory.id && (
              <div className="nested-subcategories">
                <span className='subcategory-name_nested-subcategory'>More in {subCategory.name}</span>
                
                {subCategory.subcategories.map((nestedSubcategory) => (
                  <div
                    key={subCategory.id}
                    className="subcategory"
                    onMouseEnter={() => handleSubcategoryMouseEnter(subCategory.id)}
                    onMouseLeave={() => setActiveSubcategory(null)}
                  >
                    <span className="subcategory-name">
                      {nestedSubcategory.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="categories-list">
      {CategoriesData.map((category) => (
        <div
          key={category.id}
          className="category"
          onMouseEnter={() => handleCategoryMouseEnter(category.id)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <span className="category-name">
            <img src={category.image} alt=''/>
            {category.name}
          </span>
     
          {category.subcategories && activeCategory === category.id && (
            <div className="subcategories">
              {showSubcategories(category.subcategories)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryDropdown;
