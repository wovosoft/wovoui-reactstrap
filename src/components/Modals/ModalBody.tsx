import {toClasses} from "../../helpers";
import {ModalBodyProps} from "./index";

export default function ModalBody(
    {
        tag = "div",
        variant,
        className,
        ...props
    }: ModalBodyProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "modal-body",
            {
                ["text-bg-" + variant]: variant
            }
        ])
    };

    const Tag = tag;
    return (<Tag {...attrs}/>)
}