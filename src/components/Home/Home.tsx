import React,{useState} from "react";
import vector from "../../assets/vector.svg"
import style from "./home.module.css"
import ProductContainer from "../ProductContainer/ProductContainer";
import { filterType } from "../../vite-env";
const Home : React.FC = () =>{
    const [filter,setFilter]= useState<filterType>("all")
    const handleShowAll = () => setFilter("all")
    const handleShowInStock = () => setFilter("instock")
    return(
        <div className={style.home}>
            <div className={style.head_Home}>
                <img src={vector}></img>
                <h2 className="active">Our Collection</h2>
                <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div>
                    <button className={filter === 'all' ? style.active : ''} onClick={handleShowAll}>All Products</button>
                    <button className={filter === 'instock' ? style.active : ''} onClick={handleShowInStock}>Available Now</button>
                </div>
            </div>
            <ProductContainer filter={filter}></ProductContainer>
        </div>
    )
}
export default Home