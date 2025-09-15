import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


export default function Profile (props: HTMLAttributes<HTMLDivElement>) {

    const {className, children, ...otherProps} = props

    return (
        <div className={twMerge('size-20 rounded-full overflow-hidden border-4 border-pink-500  bg-neutral-900', className)} {...otherProps}>
            {children}
        </div>
    )
}