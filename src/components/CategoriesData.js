// CategoriesData.js
const CategoriesData = [
  {
    id: 1,
    name: 'Electronics',
    image:"https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
    subcategories: [
      {
        id: 101,
        name: 'Mobile',
        subcategories: [
          { id: 1011, name: 'Smartphones' },
          { id: 1012, name: 'Feature Phones' },
          { id: 1013, name: 'Phone Accessories' }
        ]
      },
      {
        id: 102,
        name: 'Laptops',
        subcategories: [
          { id: 1021, name: 'Ultrabooks' },
          { id: 1022, name: 'Gaming Laptops' },
          { id: 1023, name: 'Laptop Accessories' }
        ]
      },
      {
        id: 103,
        name: 'Audio',
        subcategories: [
          { id: 1031, name: 'Headphones' },
          { id: 1032, name: 'Speakers' },
          { id: 1033, name: 'Home Audio Systems' }
        ]
      },
      {
        id: 104,
        name: 'Wearable Tech',
        subcategories: [
          {
            id: 1041,
            name: 'Smart Watches',
            subcategories: [
              { id: 10411, name: 'Apple Watches' },
              { id: 10412, name: 'Fitness Bands' },
              { id: 10413, name: 'Hybrid Watches' }
            ]
          },
          { id: 1042, name: 'Smart Glasses (VR)' },
          { id: 1043, name: 'Smart Bands' }
        ]
      },
      { id: 105, name: 'Tablets' }
    ]
  },
  {
    id: 2,
    name: 'TVs & Appliances',
    image:"https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
    subcategories: [
      { id: 201, name: 'Television' },
      {
        id: 202,
        name: 'Shop by Screen Size',
        subcategories: [
          { id: 2021, name: '24" & Below' },
          { id: 2022, name: '28" - 32"' },
          { id: 2023, name: '39" - 43"' },
          { id: 2024, name: '48" & Above' }
        ]
      },
      { id: 203, name: 'Washing Machines' },
      { id: 204, name: 'Air Conditioners' },
      {
        id: 205,
        name: 'Refrigerators',
        subcategories: [
          { id: 2051, name: "Single Door" },
          { id: 2052, name: "Double Door" },
          { id: 2053, name: "Triple Door" },
          { id: 2054, name: "Side by Side" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Men',
    image:"https://rukminim2.flixcart.com/image/832/832/kwzap3k0/shirt/g/q/9/m-lstr-grey-p-v-creations-original-imag9jggsvfcgpp4.jpeg?q=70&crop=false",
    subcategories: [
      {
        id: 301,
        name: 'Footwear',
        subcategories: [
          { id: 3011, name: "Sports Shoes" },
          { id: 3012, name: "Casual Shoes" },
          { id: 3013, name: "Formal Shoes" },
          { id: 3014, name: "Flip-Flops" }
        ]
      },
      {
        id: 302,
        name: 'Clothing',
        subcategories: [
          { id: 3021, name: 'T-Shirts' },
          { id: 3022, name: 'Jeans' },
          { id: 3023, name: 'Jackets' }
        ]
      },
      {
        id: 303,
        name: 'Winter Wear',
        subcategories: [
          { id: 3031, name: 'Sweaters' },
          { id: 3032, name: 'Hoodies' },
          { id: 3033, name: 'Thermals' }
        ]
      },
      {
        id: 304,
        name: "Men's Grooming",
        subcategories: [
          { id: 3041, name: "Deodorants" },
          { id: 3042, name: "Perfumes" },
          { id: 3043, name: "Beard Care" },
          { id: 3044, name: "Shaving & Aftershave" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Women',
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/8/q/0/l-tl9141-dgreen-hilfire-region-original-imah27rn8z2mnwqk.jpeg?q=70&crop=false",
    subcategories: [
      {
        id: 401,
        name: 'Ethnic Wear',
        subcategories: [
          { id: 4011, name: "Sarees" },
          { id: 4012, name: "Kurtas & Kurtis" },
          { id: 4013, name: "Lehenga Choli" }
        ]
      },
      {
        id: 402,
        name: 'Western Wear',
        subcategories: [
          { id: 4021, name: 'Dresses' },
          { id: 4022, name: 'Tops' },
          { id: 4023, name: 'Jeans' }
        ]
      },
      {
        id: 403,
        name: 'Footwear',
        subcategories: [
          { id: 4031, name: 'Heels' },
          { id: 4032, name: 'Flats' },
          { id: 4033, name: 'Sneakers' }
        ]
      },
      {
        id: 404,
        name: "Beauty & Personal Care",
        subcategories: [
          { id: 4041, name: "Skincare" },
          { id: 4042, name: "Makeup" },
          { id: 4043, name: "Haircare" }
        ]
      }
    ]
  },
  {
    id: 5,
    image:"https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
    name: 'Home & Furniture',
    subcategories: [
      {
        id: 501,
        name: 'Kitchen & Dining',
        subcategories: [
          { id: 5011, name: 'Cookware' },
          { id: 5012, name: 'Dinner Sets' },
          { id: 5013, name: 'Storage Containers' }
        ]
      },
      {
        id: 502,
        name: 'Furniture',
        subcategories: [
          { id: 5021, name: 'Sofas' },
          { id: 5022, name: 'Beds' },
          { id: 5023, name: 'Dining Tables' }
        ]
      },
      {
        id: 503,
        name: 'Home Decor',
        subcategories: [
          { id: 5031, name: 'Wall Art' },
          { id: 5032, name: 'Lighting' },
          { id: 5033, name: 'Curtains & Blinds' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Sports, Books & More',
    image:"https://www.kanis.rw/public/uploads/all/8zH1Cz7DBcKtMGDEl5eEwH30Ftf8DIz09WCyVQg5.png",
    subcategories: [
      {
        id: 601,
        name: 'Sports',
        subcategories: [
          { id: 6011, name: 'Cricket' },
          { id: 6012, name: 'Football' },
          { id: 6013, name: 'Fitness Equipment' }
        ]
      },
      {
        id: 602,
        name: 'Books',
        subcategories: [
          { id: 6021, name: 'Fiction' },
          { id: 6022, name: 'Non-Fiction' },
          { id: 6023, name: 'Educational' }
        ]
      },
      {
        id: 603,
        name: 'Stationery',
        subcategories: [
          { id: 6031, name: 'Notebooks' },
          { id: 6032, name: 'Pens & Pencils' },
          { id: 6033, name: 'Art Supplies' }
        ]
      }
    ]
  }
];


// Products Data
const productsData = [
  {
    id: 1,
    name: 'Apple iPhone 13',
    category: 'Mobiles',
    price: '59,999',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70',
    description: 'The latest iPhone with A15 Bionic chip and 5G support.'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    category: 'Mobiles',
    price: '27,499',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70',
    description: 'The new Galaxy with dynamic AMOLED display and triple camera setup.'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM4',
    category: 'Electronics',
    price: '19,999',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/l1dwknk0/headphone/b/f/2/wh-1000xm4-sony-original-imagcywfhzq8hx2z.jpeg?q=70',
    description: 'Noise-canceling over-ear headphones with superior sound quality.'
  },
  {
    id: 4,
    name: 'Nike Air Max 270',
    category: 'Fashion',
    price: '9,979',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/1/q/q/7-ah8050-8-nike-white-white-persian-violet-dark-grey-original-imahft9gp6szgfg5.jpeg?q=70',
    description: 'Comfortable and stylish sneakers for everyday wear.'
  },
  {
    id: 5,
    name: 'Samsung QLED TV',
    category: 'Electronics',
    price: '64,999',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/z/z/s/-original-imagttjpr7vphrks.jpeg?q=70',
    description: '4K QLED TV with vibrant colors and deep contrasts.'
  },
  {
    id: 6,
    name: 'Levi’s 501 Original Jeans',
    category: 'Fashion',
    price: '2,799',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/i/o/r/-original-imagkgq2gcrhydph.jpeg?q=70',
    description: 'Classic straight-leg jeans with timeless style.'
  }
];

export { productsData, CategoriesData };
