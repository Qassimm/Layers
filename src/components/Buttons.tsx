import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";


const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-green-500 text-neutral-950 border-green-500 hover:bg-green-600",
      secondary: "border-white text-white bg-transparent hover:bg-neutral-800",
    },
    size:{
      sm:'h-10',
    }
  }
});

export default function Buttons(
    props:{variant:'primary' | 'secondary'
      size?:'sm';

    }& ButtonHTMLAttributes<HTMLButtonElement>){

    const {variant, className,size, ...otherProps} = props

    return(
        <button className={classes({
        variant,
        className,
        size,

    })}
    {...otherProps}
    />
    )
}