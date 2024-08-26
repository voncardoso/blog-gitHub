import {FunctionComponent} from "react";

interface CardProps {
    title: string,
    time: string,
    description: string,
    onCLick?: () => void
}


export const Card: FunctionComponent<CardProps> = ({time, title, description,  onCLick}) => {
    return (
        <div onClick={onCLick} className="cursor-pointer bg-base-post rounded-md shadow-lg p-8 w-full  h-[260px]  hover:border hover:border-base-label transition duration-700 ease-in-out">
            <header className="flex justify-between items-start gap-4">
                <h3 className="max-w-[283px] font-bold text-xl text-base-title">{title}</h3>
                <time className="text-sm text-base-span self-start">{time}</time>
            </header>
            <p className="text-base-text mt-5 text-base  h-[140px] overflow-auto scrollbar-custom">{description}</p>
        </div>
    )
}