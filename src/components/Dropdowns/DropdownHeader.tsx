import {DropdownHeaderProps} from "./index";

export default function DropdownHeader(
    {
        wrapper = "li",
        tag = "h6",
        children
    }: DropdownHeaderProps
) {
    return (
        <li role="presentation">
            <h6 className="dropdown-header">
                {children}
            </h6>
        </li>
    )
}