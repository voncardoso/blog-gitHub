import {FunctionComponent} from "react";

interface TitleProps {
    title: string;
}

const Title: FunctionComponent<TitleProps> = ({ title }) => {
    return (
        <h1 className="text-2xl font-bold">{ title }</h1>
    );
}
export default Title;