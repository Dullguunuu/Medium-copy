import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function NewUserModal({ newUserModal, setNewUserModal, NewUser }) {

    // const navigate = useNavigate();

    const init = {
        // username: "",
        // password: "",
        // userType: "",
        firstName: "",
        lastName: "",
        // userImg: "",
        organization: "",
    };
    const [user, setUser] = useState(init)
    const newUserObj = newUserModal ? "block" : "none"
    function addNewUser(e) {
        e.preventDefault();
        fetch("https://medium-api-psi.vercel.app/api/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log("saved");
                    console.log(data);
                })
            .catch((err) => console.log(err));

    }


    return (
        <div className="modal" style={{ display: newUserObj }}>
            <div className="modal-body p-5" >
                <input className="form-control mb-3 " type="text" placeholder="Username" />
                <input className="form-control mb-3" type="password" placeholder="Password" />
                <input className="form-control mb-3" type="text" placeholder="Usertype" />
                <input className="form-control mb-3" type="text" placeholder="Firstname" value={user.firstName} onChange={(e) => {
                    console.log(user.firstName)
                    setUser({ ...user, firstName: e.target.value })
                }} />
                <input className="form-control mb-3" type="text" placeholder="Lastname" value={user.lastName} onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }} />
                <input className="form-control mb-3" type="text" placeholder="UserImage URL" />
                <input className="form-control mb-3" type="text" placeholder="Organization" value={user.organization} onChange={(e) => { setUser({ ...user, organization: e.target.value }) }} />
                <div className="d-flex gap-3">
                    <button className="btn btn-outline-success" onClick={addNewUser}>Save</button>
                    <button className="btn btn-outline-danger" onClick={() => setNewUserModal(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}
