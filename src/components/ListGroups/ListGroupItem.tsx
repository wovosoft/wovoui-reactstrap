import {ListGroupItemProps} from "./index";
import {toClasses} from "../../helpers";

export default function ListGroupItem(
    {
        tag = "li",
        active = false,
        disabled = false,
        href = null,
        to = null,
        button = false,
        variant = null,
        children = null,
        className,
        ...props
    }: ListGroupItemProps
) {
    const attrs = {
        ...props,
        'aria-current': active,
        'aria-disabled': disabled,
        href: href,
        to: to,
        className: toClasses([
            className,
            "list-group-item",
            {
                "active": active,
                "disabled": disabled,
                "list-group-item-action": button,
                ["list-group-item-" + variant]: !!variant
            }
        ]),
    };

    const Tag = tag;

    return <Tag {...attrs}>{children}</Tag>
}