import {FunctionComponent, ReactNode} from "react";

interface HeaderProps {
    children: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({children}) => {
    return (
        <header className="flex items-start justify-between mb-2">
            {children}
        </header>
    )
}

export default Header;