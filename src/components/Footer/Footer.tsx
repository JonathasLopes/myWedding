import './Footer.css';
import { ReactComponent as Logo } from "../../assets/img/WeddingLogo.svg";

function Footer() {
    return (
        <div className='footer-container'>
            <Logo width={50} height={50} className="logo-footer" />
            <h4>Bianca & Jonathas</h4>
            <div className='space-footer'></div>
        </div>
    )
}

export default Footer;