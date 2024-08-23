import {FunctionComponent, ReactNode} from "react";

interface ContentProps {
    children: ReactNode;
}

const ContentProfile: FunctionComponent<ContentProps> = ({children}) => {
   return (
       <div className="h-full w-full flex flex-col  gap-2">
           {children}
       </div>
   )
}

export default ContentProfile;