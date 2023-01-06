export default function Trending({ trending }) {
    console.log(trending)
    return (
        <div>
            <div className="d-flex">
                <img src={require("../images/trendingFrame.png")} alt="" />
                <p>TRENDING ON MEDIUM</p>
            </div>
            <div>
                {
                    trending.map((e) => {
                        return (
                            <div>
                                <div className="trendingNum">{e.id}</div>
                                <div>
                                    <div>
                                        <img src={e.img} alt="" />
                                        {e.text1}</div>
                                    <h3>{e.text2}</h3>
                                    <p>{e.date} {e.read}
                                        <img src={e.icon} alt="" />
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}