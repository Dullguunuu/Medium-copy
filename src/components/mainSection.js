export default function MainSection() {
    return (
        <div style={{ background: "#FFC017" }} >
            <div className="styleMain" style={{ width: 1192 }}>
                <div style={{ width: 550, height: 455 }}>
                    <h1 id="title">Stay curious.</h1>
                    <p id="subTitle">Discover stories, thinking, and expertise from writers on any topic.</p>
                    <button>Start reading</button>
                </div>
                <img src={require("../images/svg.png")} alt="" id="right" />
            </div>
        </div>
    )

}