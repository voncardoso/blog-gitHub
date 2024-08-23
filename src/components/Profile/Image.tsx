import {FunctionComponent, ImgHTMLAttributes} from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

 const Image:  FunctionComponent<ImageProps> = ({...props}) => {
    return (
        <img className=" w-[148px] h-[148px] bg-base-label rounded-lg" {...props} />
    )
}
 export default Image;
