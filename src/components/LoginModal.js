import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ showModal, setShowModal, onLogin, setAdmin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const style = { display: showModal ? "block" : "none" }
    return (
        <div className="modal" style={style} onClick={setShowModal} >
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="from-label">Username</label>
                            <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="from-label">Password</label>
                            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 d-flex gap-2">
                            <button className="btn btn-warning" onClick={() => onLogin(username, password)}>Login</button>
                            <button className="btn btn-light" onClick={setShowModal}>Close</button>
                        </div>
                        <button className="btn btn-outline-success" onClick={() => { setAdmin(true); navigate("/login") }}>Admin Login</button>
                    </div>
                </div>
            </div>
        </div >
    )
}