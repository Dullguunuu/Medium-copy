export default function Footer({ footerLinks }) {
    return (
        <div className="d-flex flex-wrap" style={{ width: "400px", marginLeft: "100px" }
        }>
            {
                footerLinks.map((e) => (
                    <span style={{ marginRight: "27px", fontWeight: "400", fontSize: "13px", color: "#757575" }}>{e}</span>
                ))
            }
        </div >
    )
}