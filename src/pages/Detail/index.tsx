import {Profile} from "../../components/Profile";
import {Links} from "../../components/Links";
import {PositionIcon} from "../../enums/PositionIcon.ts";
import {InfoIcons} from "../../components/InfoIcons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faChevronLeft, faComment, faCalendar} from "@fortawesome/free-solid-svg-icons";
import useDetail from "./userDetail.controller.tsx";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment';

import 'moment/locale/pt-br';  // Importa o locale para pt-br

moment.locale('pt-br');

export const Detail = () => {
    const {data } = useDetail()

    if(data){
        return(
            <main className="w-full max-w-[864px] m-auto p-2">
                <div className="relative top-[-90px]">
                    <Profile.Root>
                        <Profile.Content>
                            <Profile.Header>
                                <Links title={"voltar"} url={"/"} positionIcon={PositionIcon.Left} icon={faChevronLeft}/>
                                <Links title={"ver no github"} url={data.html_url} positionIcon={PositionIcon.Right}/>
                            </Profile.Header>
                            <Profile.Title title={data.title} />
                            <Profile.Footer>
                                <InfoIcons size={"2xl"} title={data?.user.login} icon={faGithub}/>
                                <InfoIcons size={"sm"} title={ moment(data.updated_at).fromNow()} icon={faCalendar}/>
                                <InfoIcons size={"sm"} title={`${data.comments}`} icon={faComment}/>
                            </Profile.Footer>
                        </Profile.Content>
                    </Profile.Root>
                </div>
                <section className="relative top-[-75px] py-10 px-9">
                    <Markdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ className, children, ...props }) {
                                return (
                                    <div className="bg-base-post text-white p-4 rounded-md mt-6">
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    </div>
                                );
                            },
                        }}
                    >
                        {data.body}
                    </Markdown>
                </section>
            </main>
        )
    }

}