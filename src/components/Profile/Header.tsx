import {FunctionComponent} from "react";

interface HeaderProps {
    children: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({children}) => {
    return (
        <header className="flex items-center justify-between mb-2">
            {children}
        </header>
    )
}

export default Header;