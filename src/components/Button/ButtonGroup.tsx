import {ButtonSizes} from "../../types";
import {toClasses} from "../../helpers";

export type ButtonGroupProps = {
    tag?: keyof HTMLElementTagNameMap | string;
    ariaLabel?: string;
    size?: ButtonSizes;
    vertical?: boolean;
    justified?: boolean;
    role?: string;
    children?: any;
}
export default function ButtonGroup(props: ButtonGroupProps) {
    const {
        tag = "div",
        ariaLabel = null,
        size = null,
        vertical = false,
        justified = false,
        role = "group"
    } = props;

    const attrs = {
        className: toClasses({
            "btn-group": !vertical,
            "btn-group-vertical": vertical,
            ["btn-group-" + size]: size,
            "btn-group-justified": justified
        }),
        role,
        "aria-label": ariaLabel
    };

    const TheTag = tag;
    // @ts-ignore
    return <TheTag {...attrs}>
        {props.children}
    </TheTag>

}