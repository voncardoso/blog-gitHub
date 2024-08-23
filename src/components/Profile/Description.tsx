import {FunctionComponent} from "react";

interface DescriptionProps {
    description: string;
}
const Description: FunctionComponent<DescriptionProps> = ({description}) => {
    return (
        <p className="min-h-[60px] max-h-[400px] overflow-auto scrollbar-custom ">{description}</p>
    );
}

export default Description;