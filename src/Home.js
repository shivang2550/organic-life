import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
            
    <div className="home__container">
<img
 className="home__image"
 src="https://i1.wp.com/businesspost.ng/wp-content/uploads/2016/09/organic-food.jpg?fit=810%2C423&ssl=1"
 alt=""
/>

 <div className="home__row"> 
 
 <Product
   id="12321341"
   title="These gentle Aloe Refreshing & cleansing Face Wipes are infused with chamomile, ."
   price={11.96}
   rating={2}
   image="https://www.ayudaorganics.com/pub/media/catalog/product/cache/f9e531336d2f12b3ad8fe281a0b679d9/o/r/organic-india-apple-cider-vinegar-1.jpg"
 />
  <Product
   id="49538094"
   title="Suitable for Oily to Combination Skin."
   price={239.0}
   rating={4}
   image="https://www.ayudaorganics.com/pub/media/catalog/product/cache/f9e531336d2f12b3ad8fe281a0b679d9/s/o/soultree-nutgrass-face-wash_1.jpg"
 />

</div> 

<div className="home__row">
 <Product
   id="4903850"
   title="This handi enhances the taste and aroma of the spices naturally."
   price={199.99}
   rating={3}
   image="https://www.ayudaorganics.com/pub/media/catalog/product/cache/f9e531336d2f12b3ad8fe281a0b679d9/m/c/mc-sonera-handi-1ltr_2.jpg"
 />
 <Product
   id="23445930"
   title="
   Fruits Vegetables"
   price={98.99}
   rating={5}
   image="https://www.ayudaorganics.com/pub/media/catalog/product/cache/f9e531336d2f12b3ad8fe281a0b679d9/o/r/organic_sweet_lime_mosambi__3.jpg"
   />
 <Product
   id="3254354345"
   title="Fruits Vegetables"
   price={598.99}
   rating={4}
   image="https://www.ayudaorganics.com/pub/media/catalog/product/cache/f9e531336d2f12b3ad8fe281a0b679d9/a/l/alphanso1_2.jpg"
 />
</div>

<div className="home__row">
 <Product
   id="90829332"
   title="Mitticool Clay Water Pot gives natural cooling water. Clay being alkaline in nature helps in neutralizing the PH level of the water and giving us the Naturally cool water."
   price={1094.98}
   rating={4}
   image="https://www.ayudaorganics.com/pub/media/catalog/product/cache/f9e531336d2f12b3ad8fe281a0b679d9/m/c/mc-water-pot-7ltr_4.png"
 />
</div>
</div>
</div>
  );
}

export default Home;
