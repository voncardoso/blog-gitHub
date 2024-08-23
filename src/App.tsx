import {Profile} from "./components/Profile";
import {PositionIcon} from "./enums/PositionIcon.ts";
import {Links} from "./components/Links";
import { Header } from "./components/Header";
import {InfoIcons} from "./components/InfoIcons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {Input} from "./components/Form/Input.tsx";

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
                        <InfoIcons size={"2xl"} title={"cameronwll"}  icon={faGithub} />
                        <InfoIcons size={"sm"} title={"Rocketseat"} icon={faBuilding} />
                        <InfoIcons size={"sm"} title={"seguidores"} icon={faUserGroup} />
                    </Profile.Footer>
                </Profile.Content>
            </Profile.Root>
        </div>
        <Input placeholder="Buscar conteudo" />
    </>
  )
}

export default App
