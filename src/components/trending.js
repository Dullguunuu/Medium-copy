export default function Trending({ trending }) {
    console.log(trending)
    return (
        <>
            <div className="sectionContainers">
                <div className="d-flex gap-2">
                    <img src={require("../images/trendingFrame.png")} alt="" style={{ width: "20px", height: "20px" }} />
                    <p style={{ fontWeight: "700", fontSize: "11px" }}>TRENDING ON MEDIUM</p>
                </div>
                <div className="trendingContainer">
                    {
                        trending.map((e) => {
                            return (
                                <div className="trendingGeneral">
                                    <div className="trendingNum">{e.id}</div>
                                    <div>
                                        <div className="posted">
                                            <img src={e.img} alt="" />
                                            <p className="postedBy">{e.text1}</p>
                                        </div>
                                        <h3 className="text2Title">{e.text2}</h3>
                                        <p className="dateAndMins">{e.date} · {e.read}
                                            <img src={e.icon} alt="" />
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr></hr>
        </>
    )
}