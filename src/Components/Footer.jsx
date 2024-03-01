import '../Styles/FooterStyles/Footer.scss'

export default function Footer() {
    return (
        <>
        
        <section className="footer-section">
            <div className="container">
                <div className="Grid">
                    <h3><span>CAR</span> Rental</h3>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    <p>(123) -456-789</p>
                    <p>carrental@gmail.com</p>
                </div>
                <div className="Grid">
                    <h3> Company</h3>
                    <p>New York</p>
                    <p>Careers</p>
                    <p>Mobile</p>
                    <p>Blog</p>
                    <p>How we work</p>
                </div>
                <div className="Grid">
                    <h3>WORKING HOURS</h3>
                    <p>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                </div>
                <div className="Grid">
                    <h3>SUBSCRIPTION</h3>
                    <p>Subscribe your Email address for latest news & updates.</p>
                </div>

            </div>
        </section>
        
        </>
    )
}