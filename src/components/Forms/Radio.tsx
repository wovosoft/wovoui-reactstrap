import {RadioProps} from "./index";
import {useId} from "react";
import {toClasses} from "../../helpers";

export default function Radio(
    {
        id,
        wrapperAttrs,
        labelAttrs,
        className,
        children,
        defaultChecked = false,
        ...props
    }: RadioProps
) {
    const identifier = `wovo-reactstrap${useId()}radio`;

    const attrs = {
        ...props,
        type: 'radio',
        id: identifier,
        defaultChecked,
        className: toClasses([
            className,
            "form-check-input"
        ])
    }
    return (
        <div className="form-check" {...wrapperAttrs}>
            <input {...attrs}/>
            <label {...labelAttrs} className="form-check-label" htmlFor={identifier}>
                {children}
            </label>
        </div>
    )
}


