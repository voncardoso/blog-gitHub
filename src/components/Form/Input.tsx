import {FunctionComponent, InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FunctionComponent<InputProps> = ({...props}) => {
    return (
        <input {...props} className="flex justify-center m-auto  placeholder-base-label text-base-text w-full max-w-[864px] rounded-md bg-base-input py-3 px-4 border border-base-border  focus:border-blue focus:outline-none" />
    )
}