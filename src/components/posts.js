import Discover from "./discover";
import Footer from "./footer";

export default function Posts({ posts }) {
    const discoverMore = ["Programming", "Data Science", "Technology", "Self Improvement", "Writing", "Relationships", "Machine Learning", "Productivity", "Politics"];
    const footerLinks = ["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Terms", "About", "Text to speech"];

    return (
        <div className="sectionContainers d-flex" style={{ margin: "70px auto" }}>
            <div className="newsLeft">
                {
                    posts.map((e) => (
                        <div className="notTrendingNews">
                            <div>
                                <div className="posted">
                                    <img src={e.createdUser.img} alt="" />
                                    <p className="postedBy">{e.createdUser.Name}</p>
                                </div>
                                <h3 style={{ fontSize: "21px", fontWeight: "700" }}>{e.head}</h3>
                                <p style={{ fontSize: "15px", fontWeight: "400", color: "#757575" }}>{e.title}</p>
                                <div style={{ fontSize: "12px", fontWeight: "400", color: "#757575" }}>
                                    {e.date} · {e.read} ·
                                    <span className="keywords">{e.key}</span>
                                    <img src={e.con} alt="" />
                                </div>
                            </div>
                            <img src={e.img} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className="newsRight">
                <Discover discoverMore={discoverMore} />
                <Footer footerLinks={footerLinks} />
            </div>
        </div>
    )
} 