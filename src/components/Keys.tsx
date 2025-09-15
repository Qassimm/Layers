import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


export default function Keys (props: HTMLAttributes<HTMLDivElement>) {

    const {className, children, ...otherProps} = props

    return (
        <div className={twMerge('p-5 bg-white/90 rounded-2xl font-medium font-mono text-xl text-black', className)} {...otherProps}>
            {children}
        </div>
    )
}