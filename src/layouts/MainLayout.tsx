import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ReactComponent as Logo } from "../assets/img/WeddingLogo.svg";
import Footer from "../components/Footer/Footer";
import HamburgerNavbar from "../components/HamburgerNavbar/HamburgerNavbar";

function MainLayout() {
    return (
        <div className="body-main">
            <div className="nav-menu">
                <Logo width={50} height={50} className="logo" />
                <Navbar />
                <HamburgerNavbar />
                <div className="div-invisble"></div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;