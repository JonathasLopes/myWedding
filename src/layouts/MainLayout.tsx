import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ReactComponent as Logo } from "../assets/img/WeddingLogo.svg";
import Footer from "../components/Footer/Footer";

function MainLayout() {
    return (
        <div className="body-main">
            <div className="nav-menu">
                <Logo width={50} height={50} className="logo" />
                <Navbar />
                <div className="div-invisble"></div>
            </div>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;