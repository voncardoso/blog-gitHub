import { Header } from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "./routes";

function App() {
  return (
    <>
        <Header/>
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    </>
  )
}

export default App
