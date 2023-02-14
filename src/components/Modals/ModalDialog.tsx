import {toClasses} from "../../helpers";
import {ModalDialogProps} from "./index";

export default function ModalDialog(
    {
        tag = "div",
        scrollable,
        centered,
        className,
        size,
        fullscreen,
        ...props
    }: ModalDialogProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "modal-dialog",
            {
                ["modal-" + size]: size,
                ["modal-fullscreen" + (typeof fullscreen === 'string' ? ("-" + fullscreen) : "")]: !!fullscreen,
                "modal-dialog-scrollable": scrollable,
                "modal-dialog-centered": centered
            }
        ])
    };

    const Tag = tag;

    return <Tag {...attrs}/>
}