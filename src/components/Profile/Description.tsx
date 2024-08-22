import {FunctionComponent} from "react";

interface DescriptionProps {
    description: string;
}
const Description: FunctionComponent<DescriptionProps> = ({description}) => {
    return (
        <p>{description}</p>
    );
}

export default Description;