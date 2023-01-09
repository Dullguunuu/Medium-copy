export default function Footer({ footerLinks }) {
    return (
        <div>
            {
                footerLinks.map((e) => (
                    <span>{e}</span>
                ))
            }
        </div>
    )
}