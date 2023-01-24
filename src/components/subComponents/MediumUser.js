import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewUserModal from "./NewUserModal";

export default function MediumUser({ totalUser, setTotalUser, mediumUser }) {
    const navigate = useNavigate();

    const UserObj = totalUser ? "block" : "none";

    const [newUserModal, setNewUserModal] = useState(false)

    function NewUser() {
        setNewUserModal(!newUserModal)
    }

    const [existingUser, setExistingUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect((e) => {
        e.preventDefault();
        save()
    }, [])

    function save(e) {
        e.preventDefault();
        fetch("http://medium-api-psi.vercel.app/api/users")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setExistingUser(dt.result);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }

    if (loading) return "Loading"
    if (error) return "Error"

    function delUser(id) {
        const url = `https://medium-api-psi.vercel.app/api/users?id=${id}`
        fetch(url,
            { method: "DELETE" })
            .then(() => {
                console.log("Deleted")
                save()
            })
    }

    return (
        <div className="modal" style={{ display: UserObj }}>
            <div className="modal-body" style={{ width: "90vh", padding: "40px" }}>
                <div className="">
                    <table className="table table-strip">
                        <thead>
                            <th>#</th>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Organization</th>
                            <th>Delete Button</th>
                        </thead>
                        <tbody>
                            {
                                existingUser.map(({ firstName, lastName, organization, _id }, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{firstName}</td>
                                            <td>{lastName}</td>
                                            <td>{organization}</td>
                                            <td><button className="btn btn-outline-danger" onClick={delUser(_id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-danger" onClick={() => setTotalUser(false)}>Close User Modal</button>
                    <button className="btn btn-outline-success" onClick={NewUser}>Create New User</button>
                </div>
            </div>
            <NewUserModal
                newUserModal={newUserModal}
                setNewUserModal={setNewUserModal}
                NewUser={NewUser}
            />
        </div >
    )
}
