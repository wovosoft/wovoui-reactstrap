import {toClasses} from "../../helpers";
import {ButtonToolbarProps} from "./index";

export default function ButtonToolbar(
    {
        tag = "div",
        role = "toolbar",
        justified = false,
        keyNav = false,
        children = null,
        ...props
    }: ButtonToolbarProps
) {


    const attrs = {
        ...props,
        role: role,
        className: toClasses([
            "btn-toolbar",
            {
                "justify-content-between": justified
            }
        ])
    };

    return <div {...attrs}>{children}</div>
}