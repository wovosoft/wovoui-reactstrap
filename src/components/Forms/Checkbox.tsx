import {CheckboxProps} from "./index";
import {toClasses} from "../../helpers";
import {useId} from "react";

export default function Checkbox(
    {
        isSwitch = false,
        inline = false,
        reverse = false,
        disabled = false,
        id,
        children,
        ...props
    }: CheckboxProps
) {
    const wrapperClasses = toClasses([
        "form-check",
        {
            'form-switch': isSwitch,
            'form-check-inline': inline,
            'form-check-reverse': reverse,
        }
    ]);

    const theId = id || ['wovoui-checkbox', useId()].join('');

    return (
        <div className={wrapperClasses}>
            <input className="form-check-input" {...props} type="checkbox" id={theId}/>
            <label className="form-check-label" htmlFor={theId}>
                {children}
            </label>
        </div>
    )
}
