import {Profile} from "../../components/Profile";
import {Links} from "../../components/Links";
import {PositionIcon} from "../../enums/PositionIcon.ts";
import {InfoIcons} from "../../components/InfoIcons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBuilding, faChevronLeft, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import useDetail from "./userDetail.controller.tsx";

export const Detail = () => {
    const {data } = useDetail()
    console.log(data)
    if(data){
        return(
            <main className="w-full max-w-[864px] m-auto">
                <div className={"relative top-[-90px]"}>
                    <Profile.Root>
                        <Profile.Content>
                            <Profile.Header>
                                <Links title={"voltar"} url={""} positionIcon={PositionIcon.Left} icon={faChevronLeft}/>
                                <Links title={"ver no github"} url={data.html_url} positionIcon={PositionIcon.Right}/>
                            </Profile.Header>
                            <Profile.Title title={data.title} />
                            <Profile.Footer>
                                <InfoIcons size={"2xl"} title={data?.user.login} icon={faGithub}/>
                                <InfoIcons size={"sm"} title={data.updated_at} icon={faBuilding}/>
                                <InfoIcons size={"sm"} title={`${data.comments}`} icon={faUserGroup}/>
                            </Profile.Footer>
                        </Profile.Content>
                    </Profile.Root>
                </div>
            </main>
        )
    }

}