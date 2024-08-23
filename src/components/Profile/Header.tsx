import {FunctionComponent, ReactNode} from "react";

interface HeaderProps {
    children: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({children}) => {
    return (
        <header className="flex items-start justify-between h-[40px]">
            {children}
        </header>
    )
}

export default Header;