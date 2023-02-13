import {toClasses} from "../../helpers";
import type {ContainerProps} from "./index";

export default function Container(
    {
        tag = "div",
        fluid = false,
        size = null,
        children = null,
        ...props
    }: ContainerProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            props.className,
            {
                "container": !(fluid || size),
                "container-fluid": fluid && !size,
                ["container-" + size]: size && !fluid
            }
        ])
    };

    return <div {...attrs}>{children}</div>;
}