import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Navbar({ navbar, setAdmin }) {
    console.log(navbar)
    const navigate = useNavigate();
    return (
        <div style={{ background: "#FFC017" }} >
            <div className="navDiv" style={{ width: 1192 }}>
                <img src={require("../images/Frame.png")} alt="" style={{ width: 162, height: 25 }} />
                <ul className="navUl">
                    {
                        navbar.map((e) => (
                            <li className="navList">{e}</li>
                        ))
                    }
                </ul>
                <span
                    onClick={() => {
                        setAdmin(true);
                        navigate("/login");
                    }}
                >
                    Go to admin login
                </span>
            </div>
            <hr className="m-0"></hr>
        </div >
    )
}