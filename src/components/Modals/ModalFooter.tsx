import {ModalFooterProps} from "./index";
import {toClasses} from "../../helpers";

export default function ModalFooter(
    {
        tag = "div",
        variant,
        shrink,
        className,
        ...props
    }: ModalFooterProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "modal-footer",
            {
                ["text-bg-" + variant]: variant,
                "py-1": shrink
            }
        ])
    };

    const Tag = tag;

    return <Tag {...attrs}/>
}