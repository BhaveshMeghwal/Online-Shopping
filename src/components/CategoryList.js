import React, { useState } from 'react';
import "./CategoryDropdown.css"
import {CategoriesData} from './CategoriesData';

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [openSubcategories, setOpenSubcategories] = useState({});


  const handleMouseEnter = (category) => {
    setActiveCategory(category);
    setOpenSubcategories((prev) => ({
      ...prev,
      [category.id]: !prev[category.id],
    }));
  };
  const handleSubcategoryDropdown = (subcategory) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [subcategory.id]: !prev[subcategory.id],
    }));
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
    // setIsopen(false)
  };

  const renderSubcategories = (subCategories) => {
    return (
      <div className="categories-list1">

        {subCategories.map((subCategory) => (
          <div
            key={subCategory.id}
            className="sub-category"
            onMouseEnter={() => handleSubcategoryDropdown(subCategory)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="category-name"
            // onMouseEnter={() => handleMouseEnter(subCategory)}
              // onMouseLeave={handleMouseLeave}
            >{subCategory.name}
            </span>
            <div className='nested-subcategory'>
            {/* {subCategory.subcategories && renderSubcategories(subCategory.subcategories)} */}
              {subCategory.subcategories && openSubcategories[subCategory.id] && (
                <div className='subcategories1'>
                   {renderSubcategories(subCategory.subcategories)}
                   </div>
                  )}
             {/* {(activeCategory === subCategory.id && (subCategory.subcategories && renderSubcategories(subCategory.subcategories)))} */}
             </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="categories-list">
      {CategoriesData.map(category => (
        <div
          key={category.id}
          className="category"
          onMouseEnter={() => handleMouseEnter(category)}
          onMouseLeave={handleMouseLeave}
        >
          {/* this will print the main categories  */}
          {/* <img src={category} alt='/'/> */}
          <span className="category-name" onMouseEnter={() => handleMouseEnter(category)}>{category.name}</span>
          <div className="subcategories">
            {renderSubcategories(category.subcategories)}
            {/* {activeCategory === category.id && (category.subcategories && renderSubcategories(category.subcategories))} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;