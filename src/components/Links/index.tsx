import {FunctionComponent} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {cn} from "../../utils/cn.ts";
import {PositionIcon} from "../../enums/PositionIcon.ts";

interface LinksProps {
    title: string;
    url: string;
    positionIcon?: PositionIcon;
    icon?: IconDefinition;
}

export const Links: FunctionComponent<LinksProps> = ({ title, url, positionIcon = PositionIcon.Right, icon  = faUpRightFromSquare }) => {
    const className = cn("w-fit text-xs uppercase font-bold leading-160 text-blue hover:border-b hover:border-blue flex items-center gap-2", positionIcon === "left" && "flex-row-reverse")
    return (
            <a href={url} className={className}>
                {title} <FontAwesomeIcon size={"sm"} icon={icon}/>
            </a>
    )
}