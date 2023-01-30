import {DropdownItemProps} from "./index";
import {toClasses} from "../../helpers";

export default function (
    {
        tag = "li",
        href = "#",
        noItemTag = false,
        active = false,
        disabled = false,
        isText = false,
        itemTag,
        className,
        children,
        ...props
    }: DropdownItemProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            'dropdown-item',
            {
                active,
                disabled
            }
        ])
    };

    const getLink = () => {
        if (noItemTag) {
            return <div className="dropdown-item">{children}</div>
        } else if (itemTag) {
            return <div className="dropdown-item">{children}</div>
        } else if (isText) {
            return (
                <p className="dropdown-item-text">
                    {children}
                </p>
            )
        }

        return (
            <a {...attrs}>
                {children}
            </a>
        )
    }
    return (
        <div role="presentation">
            {getLink()}
        </div>
    );
}