export default function Discover({ discoverMore }) {
    console.log(discoverMore)
    return (
        <div>
            <h3>Discover more of what matters to you</h3>
            <div>
                {
                    discoverMore.map((e) => (
                        <button className="btn btn-secondary">{e}</button>
                    ))
                }
            </div>
        </div>
    )
}