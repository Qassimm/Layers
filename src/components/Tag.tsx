import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props :HTMLAttributes<HTMLDivElement>) {

    const {className, children, ...otherprops} =props

    return(
        <div className={twMerge('inline-flex border border-green-500 gap-2 text-green-500 px-3 py-1 rounded-full uppercase items-center', className)} {...otherprops}> 
        <span>&#10038;</span>
        <span className="text-sm ">{children}</span>
        </div>
    )
}