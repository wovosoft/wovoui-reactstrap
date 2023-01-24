import {toClasses} from "../../helpers";
import {ButtonGroupProps} from "./index";

export default function ButtonGroup(
    {
        tag = "div",
        ariaLabel = null,
        size = null,
        vertical = false,
        justified = false,
        role = "group",
        children = null,
        ...props
    }: ButtonGroupProps) {

    const attrs = {
        ...props,
        className: toClasses([
            {
                "btn-group": !vertical,
                "btn-group-vertical": vertical,
                ["btn-group-" + size]: size,
                "btn-group-justified": justified,
            },
            props.className
        ]),
        role,
        "aria-label": ariaLabel
    };


    // @ts-ignore
    return <div {...attrs}>{children}</div>
}