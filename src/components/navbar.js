import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import LoginModal from "./LoginModal";
import "../App.css";

export default function Navbar({
    style,
    onLogin,
    user,
    setUser,
    showModal,
    openModal,
    setAdmin,
}) {
    const navLink = [
        { id: 1, title: "Our story", link: "about" },
        { id: 2, title: "Membership", link: "membership" },
        { id: 3, title: "Write", link: "write" },
        { id: 4, title: "Sign In", link: "#" },
        { id: 5, title: "Get started", link: "#" },
    ];
    return (
        <div style={{ background: "#FFC017" }} >
            <div className="navDiv" style={{ width: 1192 }}>
                <img src={require("../images/Frame.png")} alt="" style={{ width: 162, height: 25 }} />
                <nav>
                    <ul className="navUl">
                        {navLink.map((e, index) => (
                            <>
                                <li className="navList" key={index}>
                                    {e.id == 4 ? (
                                        user ? (
                                            user.firstName
                                        ) : (
                                            <span onClick={openModal}>
                                                {e.title}
                                            </span>
                                        )
                                    ) : (
                                        <a className="navA" href={e.link}>
                                            {e.title}
                                        </a>
                                    )}
                                </li>
                            </>
                        ))}

                        {user && (
                            <button className="btn btn-warning" onClick={() => setUser({})}>
                                Log Out
                            </button>
                        )}
                    </ul>
                </nav>
                <hr className="m-0"></hr>
            </div>

            <LoginModal
                showModal={showModal}
                onLogin={onLogin}
                setShowModal={openModal}
                setAdmin={setAdmin}
            />
        </div>
    );
}
