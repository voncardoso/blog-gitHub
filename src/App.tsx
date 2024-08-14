import { Header } from "./components/Header";
import {Profile} from "./components/Profile";

function App() {
  return (
    <>
      <Header/>
        <div className={"relative top-[-90px]"}>
            <Profile />
        </div>
    </>
  )
}

export default App
