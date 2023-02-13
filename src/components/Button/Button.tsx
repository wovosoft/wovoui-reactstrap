import {toClasses} from "../../helpers";
import {ButtonProps} from "./index";
import {forwardRef} from "react";

export default forwardRef(function Button(
    {
        tag = "button",
        href = null,
        variant = 'secondary',
        size = null,
        type = 'button',
        outline = false,
        block = false,
        pill = false,
        squared = false,
        disabled = false,
        pressed = false,
        noWrap = false,
        link = false,
        active = false,
        activeClass = "active",
        noStyle = false,
        className,
        children,
        ...props
    }: ButtonProps, ref
) {
    let attrs = {
        ...props,
        type,
        className: toClasses(!noStyle ? [
            "btn",
            className,
            {
                disabled: disabled && tag === "a",
                ["btn-" + (outline ? "outline-" : "") + variant]: !!variant,
                ["btn-" + size]: !!size,
                "w-100": block,
                "rounded-pill": pill,
                "rounded-0": squared,
                [activeClass]: pressed || active,
                "text-nowrap": noWrap,
            }
        ] : [])
    };


    // @ts-ignore
    return <button ref={ref} {...attrs}>{children}</button>;
})
