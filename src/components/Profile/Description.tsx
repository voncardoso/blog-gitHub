import {FunctionComponent} from "react";

interface DescriptionProps {
    description: string;
}
const Description: FunctionComponent<DescriptionProps> = ({description}) => {
    return (
        <p className="h-[75px]">{description}</p>
    );
}

export default Description;