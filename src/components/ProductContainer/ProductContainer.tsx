import React from "react";
import { useEffect, useState } from "react";
const ProductContainer: React.FC =() =>{
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            console.log("Entro?");
            fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
                .then((result)=> result.json())
                .then((data)=> setData(data))
        }
        getData()
    },[])
    console.log(data);
    return(
        <>
        </>
    )
}
export default ProductContainer