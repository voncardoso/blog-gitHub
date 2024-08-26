import { Routes, Route } from 'react-router-dom';
import {Home} from "../pages/Home";
import {Layout} from "../components/Layout";
import {Detail} from "../pages/Detail";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/detail/:id" element={<Detail />}/>
            </Route>
        </Routes>
    );
}

export default MainRoutes;