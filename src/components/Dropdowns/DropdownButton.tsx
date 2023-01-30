import {DropdownButtonProps} from "./index";
import {toClasses} from "../../helpers";

export default function DropdownButton(
    {
        active,
        disabled,
        className,
        children,
        ...props
    }: DropdownButtonProps
) {
    return (
        <li role="menuitem">
            <button typeof="button" {...props} className={toClasses([className, {active, disabled}])}>
                {children}
            </button>
        </li>
    )
}