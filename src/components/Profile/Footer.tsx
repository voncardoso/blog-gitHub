import {FunctionComponent, ReactNode} from "react";

interface FooterProps {
    children: ReactNode
}

const Footer: FunctionComponent<FooterProps> = ({children}) => {
   return (
         <footer className="flex gap-4 mt-6">
              {children}
         </footer>
   )
}

export default Footer;