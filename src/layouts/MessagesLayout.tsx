import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function MessagesLayout() {
    return (
        <div className="body-main">
            <Outlet />
            <Footer />
        </div>
    )
}

export default MessagesLayout;