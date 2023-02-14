import {ModalTitleProps} from "./index";
import {toClasses} from "../../helpers";

export default function ModalTitle(
    {
        tag = "h5",
        className,
        ...props
    }: ModalTitleProps
) {

    const attrs = {
        ...props,
        className: toClasses([
            className,
            "modal-title"
        ])
    };

    const Tag = tag;
    return (<Tag {...attrs}/>)
}