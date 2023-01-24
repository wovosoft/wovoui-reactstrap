import {toClasses} from "../../helpers";
import {ButtonCloseProps} from "./index";

export default function ButtonClose(
    {
        size = null,
        white = false,
        ariaLabel = "Close",
        disabled = false,
        children = null,
        ...props
    }: ButtonCloseProps
) {

    const attrs = {
        ...props,
        type: "button",
        disabled: disabled,
        "aria-label": ariaLabel,
        className: toClasses([
            "btn-close",
            {
                'btn-close-white': white,
                ["btn-" + size]: size
            }
        ])
    };


    // @ts-ignore
    return <button {...attrs}>{children}</button>
}