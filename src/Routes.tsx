import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/Landing/LandingPage";
import Confirm from "./pages/Confirm/Confirm";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<LandingPage />}/>
                    <Route path="/confirm" element={<Confirm />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;