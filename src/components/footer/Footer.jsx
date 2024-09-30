import "./Footer.css"

const Footer = () => {

    //Update the copyright date every year
    const year = new Date().getFullYear()
    
  return (
    <footer className="footer">
        <div className="footer__container container">
            {/* <h1 className="footer__title">Bamidele</h1> */}
            {/* <div className="footer__title__underline"></div> */}

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Technologies</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                href="https://www.linkedin.com/in/dezmanvee" 
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
                Designed and built by Bamidele <br /><br />
                &copy;<span className="date">{year}</span>
            </span>
        </div>
    </footer>
  )
}
export default Footer