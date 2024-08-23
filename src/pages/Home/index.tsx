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
    const {profile, issues} = useHome()
    console.log(issues)
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
                   <div className="flex flex-col gap-3">
                       <header className="flex items-center justify-between">
                           <strong className="text-lg">Publicações</strong>
                           <span  className="text-sm text-base-span">{issues?.length} publicações</span>
                       </header>
                       <Input placeholder="Buscar conteudo"/>
                   </div>
                  <div className="grid grid-cols-2 gap-8 mt-12 mb-60">
                      {issues?.map((issue) => (
                          <Card
                              key={issue.id}
                              title={issue.title}
                              time="Há 1 dia"
                              description={issue.body}
                          />
                      ))}

                  </div>
               </section>
           </main>
       )
   }
}