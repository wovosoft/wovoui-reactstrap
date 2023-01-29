import {InputProps} from "./index";
import {toClasses} from "../../helpers";
import {FC} from "react";

const Input: FC<InputProps> = (
    {
        type = 'text',
        controlSize,
        plain,
        state = null,
        className,
        ...props
    }
) => {
    const attrs = {
        ...props,
        "aria-invalid": state === false ? 'true' : null,
        type: type,
        className: toClasses([
            className,
            {
                ["form-control" + (plain ? "-plaintext" : "")]: type !== "range",
                "form-range": type === "range",
                "is-valid": state === true,
                "is-invalid": state === false,
                ["form-control-" + controlSize]: !!controlSize,
                "form-control-color": type === "color"
            }
        ]),
    };

    // @ts-ignore
    return <input {...attrs}/>
}
export default Input;