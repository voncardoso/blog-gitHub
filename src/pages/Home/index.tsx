import {Profile} from "../../components/Profile";
import {Links} from "../../components/Links";
import {PositionIcon} from "../../enums/PositionIcon.ts";
import {InfoIcons} from "../../components/InfoIcons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBuilding, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import {Input} from "../../components/Form/Input.tsx";
import {Card} from "../../components/Card";
import useHome from "./userHome.controller.tsx";


export const Home = () => {
    const {profile} = useHome()
    console.log(profile)
   if(profile){
       return (
           <main>
               <section className="w-full max-w-[864px] m-auto">
                   <div className={"relative top-[-90px]"}>
                       <Profile.Root>
                           <Profile.Image src={profile.avatar_url} alt="profile"/>
                           <Profile.Content>
                               <Profile.Header>
                                   <Profile.Title title={profile?.name}/>
                                   <Links title={"github"} url={profile?.html_url} positionIcon={PositionIcon.Right}/>
                               </Profile.Header>
                               <Profile.Description
                                   description={profile?.bio}
                               />
                               <Profile.Footer>
                                   <InfoIcons size={"2xl"} title={profile?.login} icon={faGithub}/>
                                   <InfoIcons size={"sm"} title={profile?.company} icon={faBuilding}/>
                                   <InfoIcons size={"sm"} title={`${profile?.followers}`} icon={faUserGroup}/>
                               </Profile.Footer>
                           </Profile.Content>
                       </Profile.Root>
                   </div>
                   <Input placeholder="Buscar conteudo"/>
                   <Card
                       title="JavaScript data types and data structures"
                       time="Há 1 dia"
                       description="Programming languages all have built-in data structures,
                     but these often differ from one language to another. This article attempts to
                     list the built-in data structures available in "
                   />
               </section>
           </main>
       )
   }
}