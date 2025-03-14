import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ReactComponent as Logo } from "../assets/img/WeddingLogo.svg";
import Footer from "../components/Footer/Footer";
import HamburgerNavbar from "../components/HamburgerNavbar/HamburgerNavbar";
import { Link } from "react-router-dom";
import { useState } from "react";

function MainLayout() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="body-main">
            <div className="nav-menu">
                <Logo width={50} height={50} className="logo" />
                <Navbar />
                {!isOpen &&
                    <Link
                        to="/confirm"
                        className="nav-link confirm-mobile"
                    >
                        Confirmar Presença
                    </Link>
                }
                <HamburgerNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="div-invisble"></div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;