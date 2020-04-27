import React from "react";
import "./style.css";

function Hero() {
    return (
        <div
            className="hero text-center"
            style={{
                backgroundImage: `url("https://images.wallpaperscraft.com/image/sunglasses_books_beach_sun_110969_3840x2160.jpg")`,
            }}
        >
            <h3>Search Books via Google Play</h3>

        </div>
    );
}

export default Hero;