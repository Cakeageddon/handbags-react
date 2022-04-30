import React from "react";

function Tile ({image, img_title, title, children}) {
    return (
        <section>
            <img src={image} alt={img_title}/>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile
