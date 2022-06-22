import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import CandidateList from "./pages/candidateList";

export function Routes() {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/listadecandidatos", element: <CandidateList /> },
])
}