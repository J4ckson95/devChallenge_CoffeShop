import React from "react";
import vector from "../../assets/vector.svg"
import style from "./home.module.css"
import ProductContainer from "../ProductContainer/ProductContainer";
const Home : React.FC = () =>{
    return(
        <div className={style.home}>
            <div className={style.head_Home}>
                <img src={vector}></img>
                <h2>Our Collection</h2>
                <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div>
                    <button>All Products</button>
                    <button>Available Now</button>
                </div>
            </div>
            <ProductContainer></ProductContainer>
        </div>
    )
}
export default Home