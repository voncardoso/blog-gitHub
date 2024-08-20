import {FunctionComponent} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface LinksProps {
    title: string;
    url: string;

}

export const Links: FunctionComponent<LinksProps> = ({ title, url }) => {
    return (
            <a href={url} className={"text-xs font-bold leading-160 text-blue hover:border-b hover:border-blue flex items-center gap-2"}>
                {title} <FontAwesomeIcon size={"sm"} icon={faUpRightFromSquare}/>
            </a>
    )
}