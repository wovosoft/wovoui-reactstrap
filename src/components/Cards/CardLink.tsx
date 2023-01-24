import {CardLinkProps} from "./index";
import {toClasses} from "../../helpers";

export default function CardLink(
    {
        href = "#",
        className,
        children,
        ...props
    }: CardLinkProps
) {

    const attrs = {
        ...props,
        className: toClasses([
            className,
            "card-link"
        ])
    };

    return <a {...attrs}>{children}</a>
}