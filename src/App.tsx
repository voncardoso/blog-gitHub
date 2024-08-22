import {Profile} from "./components/Profile";
import {PositionIcon} from "./enums/PositionIcon.ts";
import {Links} from "./components/Links";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
        <div className={"relative top-[-90px]"}>
            <Profile.Root>
                <Profile.Image src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile" />
                <Profile.Content>
                    <Profile.Header>
                        <Profile.Title title="Cameron Williamson"/>
                        <Links title={"github"} url={""} positionIcon={PositionIcon.Right} />
                    </Profile.Header>
                    <Profile.Description
                        description="
                        Tristique volutpat pulvinar vel massa,
                        pellentesque egestas. Eu viverra massa quam dignissim
                        aenean malesuada suscipit.
                        Nunc, volutpat pulvinar vel mass."
                    />
                    <Profile.Footer>
                        <div>
                            <img src={""} alt=""/>
                            <p>5 completados</p>
                        </div>
                        <div>
                            <img src={""} alt=""/>
                            <p>5 completados</p>
                        </div>
                    </Profile.Footer>
                </Profile.Content>
            </Profile.Root>
        </div>
    </>
  )
}

export default App
