import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
  {
      img: "/bread.jpg",
      title: "bread ",
      desc: "pure homemad bread",
      rating: 4,
      price: "30",
  },

  {
      img: "/cookie.jpg",
      title: "Chocolate Cookies",
      desc: "pure homemade cookies",
      rating: 4,
      price: "30",
  },
  {
      img: "/breads.jpg",
      title: "bread",
      desc: "pure homemad bread",
      rating: 4,
      price: "40",
  },
  {
    img: "/cossen.jpg",
    title: "Crispy Crossion",
    desc: "pure homemad crossion",
    rating: 4,
    price: "20",
  },
  {
    img: "/pastry.jpg",
    title: "Deliseious Pastry",
    desc: "pure homemad pastry",
    rating: 4,
    price: "30",
  },
  {
    img: "/puff.jpg",
    title: "Crispy Puff",
    desc: "pure homemad Puff",
    rating: 4,
    price: "20",
  },
  {
    img: "/cookie.jpg",
    title: "cookies",
    desc: "pure homemad cookies",
    rating: 4,
    price: "20",
  }, 
  {
    img: "/breads.jpg",
    title: "bread product",
    desc: "pure homemad bread",
    rating: 4,
    price: "40",
  },  
];




const NewProducts = () => {
  return ( 
  <div>
  <div className='container pt-16'>
    <h2 className='font-medium text-2xl pb-4'>New Products</h2>


    <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-y-10'>
    
      {productsData.map((item, index) => (
        <ProductCard
        key={index}
        img={item.img}
        title={item.title}
        desc={item.desc}
        rating={item.rating}
        price={item.price}
        />
      ))}

    </div>
  </div>
  </div>
  );
};

export default NewProducts;