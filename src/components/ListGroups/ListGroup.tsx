import {ListGroupProps} from "./index";
import {toClasses} from "../../helpers";

export default function ListGroup(
    {
        tag = "ul",
        flush = false,
        numbered = false,
        horizontal = false,
        children = null,
        ...props
    }: ListGroupProps
) {

    const attrs = {
        ...props,
        className: toClasses([
            props.className,
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