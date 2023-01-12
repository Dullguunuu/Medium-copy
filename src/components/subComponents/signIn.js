export default SignIn(){
    return (
        <div>
            <h2>Log in</h2>
            <input className="form-control" type="text" placeholder="username" />
            <input className="form-control" type="password" placeholder="password" />
            <button type="submit" className="btn btn-outline-primary">Log in</button>
            <button type="submit">Close</button>
        </div>
    )
}