import React from 'react';
import Product from './Product'
import './Home.css';
function Home() {
    return (
        <div className="home">
            <img className="home__banner"
               src="https://i1.wp.com/digiday.com/wp-content/uploads/2018/08/bannerart_081018_2.jpg?fit=1400%2C600&ssl=1" alt="banner"/>
       
        {/* Product id, title, price, rating, image */} 
        <div className="home__row">
        <Product
            id="123"
            title="Harry Potter"
            price={11.96}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
        />
        <Product
            id="123"
            title="Harry Potter"
            price={11.96}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
        />
        </div>
        <div className="home__row">
        <Product
            id="123"
            title="Harry Potter"
            price={11.96}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
        />
        <Product
            id="123"
            title="Harry Potter"
            price={11.96}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
        />
        <Product
            id="123"
            title="Harry Potter"
            price={11.96}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
        />
        </div>
        
        {/* Product */}
        
        </div>
    )
}

export default Home
