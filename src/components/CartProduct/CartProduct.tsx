import React from "react";
import { CartProductProps } from "../../vite-env";
import logo_start_fill from "../../assets/Star_fill.svg"
import Logo_start from "../../assets/Star.svg"
import style from "./cartProduct.module.css"
const CartProduct: React.FC<CartProductProps> = ({dataProduct}) =>{
    return(
        <div className={style.cart}>
            <img className={style.picture} src={dataProduct.image}></img>
            {dataProduct.popular && <span>Popular</span>}
            <div className={style.dataProduct}>
                <h3>{dataProduct.name}</h3>
                <p>{dataProduct.price}</p>
            </div>
            <div className={style.rating}>
                <img src={dataProduct.rating === null ? Logo_start: logo_start_fill}></img>
                <p>{dataProduct.rating}</p>
                <p>{dataProduct.votes}</p>
            </div>
        </div>
    )
}
export default CartProduct