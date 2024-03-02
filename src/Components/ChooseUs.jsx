import '../Styles/ChooseUs/ChooseUs.scss'

import icon1 from "../images/chooseUs/icon1.png"
import icon2 from "../images/chooseUs/icon2.png"
import icon3 from "../images/chooseUs/icon3.png"
import carsChooseUs from "../images/chooseUs/main.png"
import bg from "../images/chooseUs/main.png"


export default function ChooseUs() {
    return (
        <>
        <section className="ChooseUs-section">
            <div className="container">
            <img src={carsChooseUs.src} alt="ChooseUs banner" />

            <div className='ChooseUs'>

            <div className='ChooseUs-txt'>    
            <h3>Why Choose Us </h3>
            <h2>Best valued deals you will ever find</h2>
            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
            <a href="#home">
                  Find Details &nbsp;
                </a>
            </div>

            <div className='ChooseUs-reasons'>
                <div className='reason-1'>
                <img src={icon1.src} alt="Choose us" />
                <div className='reason-txt'>
                <h3>Cross Country Drive</h3>
                <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
                </div>

                <div className='reason-1'>
                <img src={icon2.src} alt="Choose us" />
                <div className='reason-txt'>
                <h3>All Inclusive Pricing</h3>
                <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                </div>
                </div>

                <div className='reason-1'>
                <img src={icon3.src} alt="Choose us" />
                <div className='reason-txt'>
                <h3>No Hidden Charges</h3>
                <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                </div>
                </div>
            </div>
            </div>
            </div>
        </section>
        </>
    )
}