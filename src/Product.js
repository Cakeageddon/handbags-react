import React from "react";

function Product ({ image, title, price }) {
    return (
        <article>
            <span>Best seller</span>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product
