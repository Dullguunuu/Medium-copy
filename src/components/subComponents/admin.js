import React, { useEffect, useState } from "react";
import { Barchart } from "../subComponents/Barchart"

export default function Admin() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://192.168.1.50:4040/news")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.news);
                setData(dt.news);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return "Loading"
    if (error) return "Error"
    return (
        <div>
            <div className="navbar bg-dark flex-nowrap">
                {/* <div className="row"> */}
                <a href="#" className="col-md-3 navbar-brand text-light">Company name</a>
                <input type="text" className="w-100 form-control bg-dark border-0" />
                <div className="nav">
                    <div className="nav-item">
                        <span className="text-light">Log Out</span>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav bg-light flex-column">
                            <div className="nav-item">
                                <a className="nav-link">Dashboard</a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link">News</a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link">Users</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 m-3">
                        <div className="row my-4">
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <h4 className="card-title text-primary">Users</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-people" style={{ fontSize: "40px" }}></i>
                                        <h3>4500</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <h4 className="card-title text-warning">News</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-newspaper" style={{ fontSize: "40px" }}></i>
                                        <h3>9000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <h4 className="card-title text-success">Category</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-tags" style={{ fontSize: "40px" }}></i>
                                        <h3>20</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Barchart />
                        <div className="row p-3">
                            <div className="table-responsive">
                                <table className="table table-strip">
                                    <thead>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>is Trending</th>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(({ _id, title, isTrending, category }, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{title}</td>
                                                        <td>{category}</td>
                                                        <td>{isTrending ? (
                                                            <span className="badge bg-success">yes</span>
                                                        ) : (
                                                            <span className="badge bg-danger">no</span>
                                                        )}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >)
}