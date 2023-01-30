import {DropdownMenuProps} from "./index";
import {toClasses} from "../../helpers";

export default function (
    {
        tag = "ul",
        dark,
        show,
        children,
        className,
        ...props
    }: DropdownMenuProps
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
        <div {...attrs}>
            {children}
        </div>
    )
}
