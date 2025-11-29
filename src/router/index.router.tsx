import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layout/index.layout";
import HomePage from "../pages/index.page";
import PrivacyPage from "../pages/privacy.page";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<MainLayout/>}  >
                <Route index element={<HomePage/>}/>
                <Route path="/privacy-and-policy" element={<PrivacyPage/>}/>
        </Route>
    )
)