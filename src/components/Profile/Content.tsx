import {FunctionComponent, ReactNode} from "react";

interface ContentProps {
    children: ReactNode;
}

const ContentProfile: FunctionComponent<ContentProps> = ({children}) => {
   return (
       <div className="w-full">
           {children}
       </div>
   )
}

export default ContentProfile;