import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/Landing/LandingPage";
import Confirm from "./pages/Confirm/Confirm";
import Messages from "./pages/Messages/Messages";
import MessagesLayout from "./layouts/MessagesLayout";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/confirm" element={<Confirm />} />
                </Route>
                <Route path="/Messages" element={<MessagesLayout />}>
                    <Route index element={<Messages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;