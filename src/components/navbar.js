export default function Navbar({ navbar }) {
    console.log(navbar)
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
            </div>
        </div>
    )
}