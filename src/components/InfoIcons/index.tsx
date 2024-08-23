import {FunctionComponent} from "react";
import { IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";



interface InfoIconsProps extends FontAwesomeIconProps {
    icon: IconProp;
    title: string;
}

export const InfoIcons: FunctionComponent<InfoIconsProps> = ({title,  icon, ...props}) =>{
    return (
        <div className="w-fit flex items-center justify-center gap-2 text-base-label">
            <FontAwesomeIcon icon={icon}  {...props}/>
            <p className="text-base-subtitle">{title}</p>
        </div>
    )
}