import {FunctionComponent} from "react";

interface RootProps {
    children: React.ReactNode
}

const Root: FunctionComponent<RootProps> = ({children}) => {
    return (
        <div className="flex rounded-[10px] gap-8  items-start justify-between bg-base-profile py-8 px-10 w-full max-w-[864px] m-auto ">
            {children}
        </div>
    )
}

export default Root;