import {BreadcrumbItemProps} from "./index";
import {toClasses} from "../../helpers";

export default function BreadcrumbItem(
    {
        tag = "li",
        active = false,
        activeClass = "active",
        append = false,
        disabled = false,
        exact = false,
        href,
        to,
        replace = false,
        className,
        children,
        ...props
    }: BreadcrumbItemProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "breadcrumb-item",
            {
                [activeClass]: active
            }
        ])
    };

    const getChildren = () => {
        if (href) {
            return <a href={href}>{children}</a>
        }

        if (to) {
            return "FOR ROUTER. CURRENTLY NOT IMPLEMENTED";
        }

        return children;
    };

    return (<li {...attrs}>
        {getChildren()}
    </li>)
}