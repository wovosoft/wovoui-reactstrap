import {DropdownMenuProps} from "./index";
import {toClasses} from "../../helpers";
import {ForwardedRef, forwardRef} from "react";

export default forwardRef(function (
    {
        tag = "ul",
        dark,
        show,
        children,
        className,
        ...props
    }: DropdownMenuProps,
    ref: ForwardedRef<HTMLUListElement>
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "dropdown-menu",
            {
                'dropdown-menu-dark': dark,
                'show': show,
            }
        ])
    };

    return (
        <ul {...attrs} ref={ref}>
            {children}
        </ul>
    )
})
