import {ModalHeaderProps} from "./index";
import {toClasses} from "../../helpers";

export default function ModalHeader(
    {
        tag = "div",
        variant,
        shrink,
        className,
        ...props
    }: ModalHeaderProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "modal-header",
            {
                ["text-bg-" + variant]: variant,
                "py-2": shrink
            }
        ])
    }

    const Tag = tag;
    return (<Tag {...attrs}/>)
}