import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.style.css";

function Navbar() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img
                    onClick={() => navigate("/")}
                    className="nav__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="netflixLogo"
                />
                <img
                    onClick={() => navigate("/profile")}
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="netflixAvater"
                />

            </div>
        </div>
    );
}

export default Navbar;