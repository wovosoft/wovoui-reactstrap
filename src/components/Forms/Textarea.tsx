import {TextareaProps} from "./index";
import {toClasses} from "../../helpers";

export default function Textarea(
    {
        size,
        className,
        ...props
    }: TextareaProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "form-control",
            {
                ["form-control-" + size]: !!size
            }
        ])
    }
    return (<textarea {...attrs}/>);
}