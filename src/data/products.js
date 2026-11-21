
const products = [
  // MEN'S COLLECTION - 10
  {
    id: 1,
    name: "Premium Formal Coat",
    category: "Men",
    price: 200,
    image: "https://chunmun.in/cdn/shop/files/381_88844ded-6270-492f-9b26-88d334abc334.png?v=1775633224"
  },
  {
    id: 2,
    name: "Classic Blue Blazer",
    category: "Men",
    price: 120,
    image: "https://img.drz.lazcdn.com/g/kf/S2a2e55eec5334238b151b9c3757fba6bH.jpg_960x960q80.jpg_.webp"
  },
  {
    id: 3,
    name: "Modern Denim Jacket",
    category: "Men",
    price: 95,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600"
  },
  {
    id: 4,
    name: "Premium Leather Jacket",
    category: "Men",
    price: 155,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
  },
  {
    id: 5,
    name: "Casual Bomber Jacket",
    category: "Men",
    price: 85,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
  },
  {
    id: 6,
    name: "Classic White Shirt",
    category: "Men",
    price: 45,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"
  },
  {
    id: 7,
    name: "Premium Casual Shirt",
    category: "Men",
    price: 55,
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600"
  },
  {
    id: 8,
    name: "Classic Polo T-Shirt",
    category: "Men",
    price: 45,
    image: "https://image.hm.com/assets/hm/fb/1e/fb1ec5f3e79a3009b91bc9f12dc45156f01ded57.jpg?imwidth=768"
  },
  {
    id: 9,
    name: "Premium Casual Hoodie",
    category: "Men",
    price: 65,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
  },
  {
    id: 10,
    name: "Winter Sweater",
    category: "Men",
    price: 75,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"
  },

  // WOMEN'S COLLECTION - 10
  {
    id: 11,
    name: "Salwar Kameez",
    category: "Women",
    price: 75,
    image: "https://diademstore.com/cdn/shop/files/ChatGPTImageApr18_2026_05_01_32PM.png?v=1776511938"
  },
  {
    id: 12,
    name: "Maroon Embroidered Three Piece",
    category: "Women",
    price: 95,
    image: "https://iqrafch.com/cdn/shop/files/iqrafch_aleia_1.jpg?v=1742926080&width=800"
  },
  {
    id: 13,
    name: "Premium Borka",
    category: "Women",
    price: 110,
    image: "https://i.pinimg.com/736x/ff/3a/49/ff3a4967036fbd7a4e542b7a97eb462a.jpg"
  },
  {
    id: 14,
    name: "Traditional Elegant Sharee",
    category: "Women",
    price: 125,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKtMKzhtn1qFUw63yH7OaI7ttHTGdRMoIsRucV_jHy3pRNSxDtbM1ffa-&s=10"
  },
  {
    id: 15,
    name: "Luxury Party Wear Sharee",
    category: "Women",
    price: 150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUm40YWjuSucpysrqglQ8C3C8JC51vGt8IagGV1-1qwil4YBMLYT8Kx8&s=10"
  },
  {
    id: 16,
    name: "Ladies Puffer Jacket",
    category: "Women",
    price: 85,
    image: "https://www.outwearasia.com/cdn/shop/files/21_572028bc-9eda-46d5-b5e0-98f73cad5377.png?v=1795071109&width=832"
  },
  {
    id: 17,
    name: "Premium Long Coat",
    category: "Women",
    price: 135,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600"
  },
  {
    id: 18,
    name: "Summer Long Coat",
    category: "Women",
    price: 155,
    image: "https://static-01.daraz.com.bd/p/033a8323ed8839c9db40677a4281a5e7.jpg"
  },
  {
    id: 19,
    name: "Premium Three Piece",
    category: "Women",
    price: 89,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"
  },
  {
    id: 20,
    name: "Elegant Evening Gown",
    category: "Women",
    price: 115,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600"
  },

  // Premimum COLLECTION - 10
  {
    id: 21,
    name: "Classic T-Shirt",
    category: "Premimum",
    price: 35,
    image: "https://img.drz.lazcdn.com/g/kf/Sb14b327f9cca49fa9c5b3595e1b13577w.jpg_720x720q80.jpg"
  },
  {
    id: 22,
    name: "Classic Denim Jeans",
    category: "Premimum",
    price: 60,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
  },
  {
    id: 23,
    name: "Minimal Casual Hoodie",
    category: "Premimum",
    price: 59,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
  },
  {
    id: 24,
    name: "Premium Sweatshirt",
    category: "Premimum",
    price: 49,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600"
  },
  {
    id: 25,
    name: "Classic Cotton T-Shirt",
    category: "Premimum",
    price: 29,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
  },
  {
    id: 26,
    name: "Streetwear Jacket",
    category: "Premimum",
    price: 99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
  },
  {
    id: 27,
    name: "High Quality Premium Winter Jacket-LIVIA BLACK",
    category: "Premimum",
    price: 88,
    image: "https://www.outwearasia.com/cdn/shop/files/a.png?v=1747734591&width=832"
  },
  {
    id: 28,
    name: "Premium Knitwear",
    category: "Premimum",
    price: 69,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"
  },
  {
    id: 29,
    name: "Casual Summer Shirt",
    category: "Premimum",
    price: 42,
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600"
  },
  {
    id: 30,
    name: "Women Long Sleeve Hooded jacket ",
    category: "Premimum",
    price: 89,
    image: "https://www.outwearasia.com/cdn/shop/files/1_5c195e3f-3e55-4f90-b5e8-0c2045b9d00d.png?v=1768675190&width=832"
  }
]

export default products
