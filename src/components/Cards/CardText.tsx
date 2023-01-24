import {CardTextProps} from "./index";
import {toClasses} from "../../helpers";

export default function CardText(
    {
        tag = "p",
        children,
        ...props
    }: CardTextProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            props.className,
            "card-text"
        ])
    }

    return <p {...props}>{children}</p>
}