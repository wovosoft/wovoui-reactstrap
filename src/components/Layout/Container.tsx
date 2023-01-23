import type {
    ResponsiveSizes
} from "../../types";
import {toClasses} from "../../helpers";

export type ContainerProps = {
    tag?: keyof HTMLElementTagNameMap;
    fluid?: boolean;
    size?: ResponsiveSizes | null;
    children?: any;
}

export default function Container(props: ContainerProps) {
    const {
        tag = "div",
        fluid = false,
        size = null
    } = props;

    const attrs = {
        className: toClasses({
            "container": !(fluid || size),
            "container-fluid": fluid && !size,
            ["container-" + size]: size && !fluid
        })
    }
    const TheTag = tag;
    return <TheTag {...attrs}>
        {props.children}
    </TheTag>
}