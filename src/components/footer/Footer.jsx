import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Bamidele</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                href="https://www.linkedin.com/in/bamidele-ademokoya-7a4054151" 
                className="footer__social-icon" 
                target="_blank">
                <i class="uil uil-linkedin-alt"></i>
                </a>

                <a 
                href="https://wa.me/+2348077620522" 
                className="footer__social-icon" 
                target="_blank">
                <i class="uil uil-whatsapp"></i>
                </a>

                <a 
                href="https://github.com/dezmanvee" 
                className="footer__social-icon" 
                target="_blank">
                <i class="uil uil-github-alt"></i>
                </a>

                <a 
                href="https://twitter.com/dezmanvee" 
                className="footer__social-icon" 
                target="_blank">
                <i class="uil uil-twitter-alt"></i>
                </a>

            </div>

            <span className="footer__copy">
                &copy; Designed and developed by Bamidele <span className="date">2023</span>. All rights reserved.
            </span>
        </div>
    </footer>
  )
}
export default Footer