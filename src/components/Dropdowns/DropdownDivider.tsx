import {DropdownDividerProps} from "./index";

export default function DropdownDivider(props: DropdownDividerProps) {
    return (
        <li role="presentation" {...props}>
            <hr role="separator" aria-orientation="horizontal" className="dropdown-divider"/>
        </li>
    )
}