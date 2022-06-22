import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import CandidateList from "./pages/candidateList";
import CandidateIndividual from "./pages/candidateIndividual";

export function Routes() {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/listadecandidatos", element: <CandidateList /> },
        { path: "/candidato/:id", element: <CandidateIndividual /> },
])
}