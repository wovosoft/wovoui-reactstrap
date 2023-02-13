import {ListGroupProps} from "./index";
import {toClasses} from "../../helpers";

export default function ListGroup(
    {
        tag = "ul",
        flush,
        numbered,
        horizontal,
        children,
        className,
        ...props
    }: ListGroupProps
) {

    const attrs = {
        ...props,
        className: toClasses([
            className,
            "list-group",
            {
                "list-group-flush": flush,
                "list-group-numbered": numbered,
                ["list-group-horizontal" + (typeof horizontal === "string" ? "-" + horizontal : "")]: horizontal,
            }
        ])
    };

    return <ul {...attrs}>{children}</ul>;
}