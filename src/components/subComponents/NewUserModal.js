import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewUserModal({ newUserModal, setNewUserModal, NewUser }) {

    const navigate = useNavigate();

    const newUserObj = newUserModal ? "block" : "none"

    return (
        <div className="modal" style={{ display: newUserObj }}>
            <div className="modal-body p-5" >
                <input className="form-control mb-3 " type="text" placeholder="Username" />
                <input className="form-control mb-3" type="password" placeholder="Password" />
                <input className="form-control mb-3" type="text" placeholder="Usertype" />
                <input className="form-control mb-3" type="text" placeholder="Firstname" />
                <input className="form-control mb-3" type="text" placeholder="Lastname" />
                <input className="form-control mb-3" type="text" placeholder="UserImage URL" />
                <input className="form-control mb-3" type="text" placeholder="Organization" />
                <div className="d-flex gap-3">
                    <button className="btn btn-outline-success">Save</button>
                    <button className="btn btn-outline-danger" onClick={() => setNewUserModal(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}
