import React from "react";
import { useEffect, useState } from "react";
import { Product, ProductContainerProps } from "../../vite-env";
import CartProduct from "../CartProduct/CartProduct";
import style from "./productContainer.module.css"
const ProductContainer: React.FC<ProductContainerProps> =({filter}) =>{
    const [data,setData] = useState<Product[]>([])
    useEffect(()=>{
        const getData = async()=>{
            fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
                .then((result)=> result.json())
                .then((data)=> setData(data))
        }
        getData()
    },[])
    const filterData = filter === "instock"? data.filter(product => product.available): data
    return(
        <div className={style.container}>
            {filterData && filterData.map((element,index)=> <CartProduct key={index} dataProduct={element}></CartProduct>)}
        </div>
    )
}
export default ProductContainer