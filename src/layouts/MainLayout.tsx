import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ReactComponent as Logo } from "../assets/img/WeddingLogo.svg";
import Footer from "../components/Footer/Footer";
// import HamburgerNavbar from "../components/HamburgerNavbar/HamburgerNavbar";
import { Link } from "react-router-dom";
// import { useState } from "react";

function MainLayout() {
    // const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="body-main">
            <div className="nav-menu">
                <Link
                    to="/"
                >
                    <Logo width={50} height={50} className="logo" />
                </Link>
                <Navbar />
                {/* {!isOpen && */}
                <div className="confirm-container">
                    <Link
                        to="/confirm"
                        className="confirm-mobile"
                    >
                        Confirmar Presença
                    </Link>
                </div>
                {/* } */}
                {/* <HamburgerNavbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                <div className="div-invisble"></div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;